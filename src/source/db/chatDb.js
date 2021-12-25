import { nanoid } from 'nanoid';


const nanoidId1 = nanoid(8);
const nanoidId2 = nanoid(8);
const nanoidId3 = nanoid(8);
const nanoidId4 = nanoid(8);

export const chatUsersArray = [
	{
		//id: nanoidId1,
		name: "Николай",
		date: new Date().toLocaleDateString(),
		image: "https://e7.pngegg.com/pngimages/109/994/png-clipart-teacher-student-college-school-education-avatars-child-face.png"
	},
	{
		//id: nanoidId3,
		name: "Ольга",
		date: new Date().toLocaleDateString(),
		image: "https://st3.depositphotos.com/8132176/34403/v/1600/depositphotos_344031988-stock-illustration-cute-vector-girl-avatar-icon.jpg"
	},
	{
		//id: nanoidId2,
		name: 'Петр',
		date: new Date().toLocaleDateString(),
		image: "https://www.vornexinc.com/site_images/james.png"
	},
	{
		//id: nanoidId4,
		name: 'Света',
		date: new Date().toLocaleDateString(),
		image: "https://alexeykrol.com/wp-content/uploads/2018/12/karolyn-fox-foto.1024x1024.jpg"

	}
];

export default chatUsersArray;