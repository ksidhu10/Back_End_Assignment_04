import { Request, Response } from 'express';
import * as admin from 'firebase-admin';

export const getUserDetails = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const userRecord = await admin.auth().getUser(userId);
    res.status(200).send(userRecord);
  } catch (error) {
    res.status(404).send({ error: 'User not found' });
  }
};

export const assignRole = async (req: Request, res: Response) => {
  try {
    const { userId, role } = req.body;
    await admin.auth().setCustomUserClaims(userId, { role });
    res.status(200).send({ message: `Role ${role} assigned to ${userId}` });
  } catch (error) {
    res.status(500).send({ error: 'Failed to assign role' });
  }
};
