import admin from "firebase-admin";

const getFirebaseAdminApp = () => {
    if (admin.apps.length > 0) {
        return admin.app();
    }
    return admin.initializeApp({
        credential: admin.credential.cert(
            JSON.parse(process.env.FIREBASE_ADMIN_PRIVATE_KEY ?? "")
        ),
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    });
};

const app = getFirebaseAdminApp();

export const FirebaseAdminAuth = app.auth();