"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export const completeOnboarding = async (formData: any) => {
  const { userId } = auth();

  if (!userId) {
    return { message: "No Logged In User" };
  }

  try {
    const res = await clerkClient.users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true,
        birthday: formData.get("birthday"),
        city: formData.get("city"),
        state: formData.get("state"),
      },
    });
    return { message: res.publicMetadata };
  } catch (err) {
    return { error: "There was an error updating the user metadata." };
  }
};
