import firebase from "firebase";


const firebaseConfig = {
	apiKey: "AIzaSyA_jVOolSF4H8YgCz_t1BixkV1XQgQu64U",
	authDomain: "gb-auth-chat-hw-9.firebaseapp.com",
	databaseURL: "https://gb-auth-chat-hw-9-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "gb-auth-chat-hw-9",
	storageBucket: "gb-auth-chat-hw-9.appspot.com",
	messagingSenderId: "832860972217",
	appId: "1:832860972217:web:cf259539b98674f4a72768"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();
export const rootRef = db.ref('root');

//*_Вариант вложенности каталога сообщений в чаты (при удалении чата сообщения удаляются)
export const chatsRef = rootRef.child('chats');
export const msgsRef = rootRef.child('chats');

//*_Вариант разнесения каталога чатов и сообщений (при удалении чата сообщения не удаляются)
//export const chatsRef = db.ref('chats');
//export const msgsRef = db.ref('messsages');

