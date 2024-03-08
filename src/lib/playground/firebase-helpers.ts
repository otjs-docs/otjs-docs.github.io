import {
  getAuth,
  inMemoryPersistence,
  setPersistence,
  signInAnonymously,
  updateProfile,
} from "firebase/auth";
import { child, getDatabase, push, ref } from "firebase/database";

export const signInUser = async () => {
  const auth = getAuth();

  try {
    await setPersistence(auth, inMemoryPersistence);
    const { user } = await signInAnonymously(auth);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Auth Error", errorCode, errorMessage);
    throw new Error("Authentication Failed, please refresh the page.");
  }
};

export const getUserInfo = async (user: { uid: string }) => {
  const randInt = (limit: number) => (Math.random() * limit) | 0;

  const userColor = `rgb(${randInt(255)}, ${randInt(255)}, ${randInt(255)})`;
  const userId = user.uid;
  const userName = `Anonymous ${randInt(100)}`;

  try {
    await updateProfile(user, { displayName: userName });
    return { userColor, userId, userName };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Update Profile Error", errorCode, errorMessage);
    throw new Error("User Creation Failed, please refresh the page.");
  }
};

export const getDatabaseRef = () => {
  let _ref = ref(getDatabase(), "rooms");

  const hash = window.location.hash.replace(/#/g, "");

  if (hash) {
    _ref = child(_ref, hash);
  } else {
    _ref = push(_ref); // generate unique location.
    window.location.replace(window.location + "#" + _ref.key); // add it as a hash to the URL.
  }

  return _ref;
};
