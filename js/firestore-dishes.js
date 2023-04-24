import { db, getData } from "./firestore.config.js";
import { collection, addDoc, deleteDoc, doc } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js'


const data = await getData('Recipe')

/* Form til at tilføje opskrifter med */
const form = document.querySelector('form')

form.addEventListener('submit', async evt => {
	evt.preventDefault()

	await addDoc(collection(db, 'Recipe'), 
		{
			title: form.title.value,
			ingredients: form.ingredients.value
		}
	).catch(err => console.log({err}))

	form.title.value = ''
	form.ingredients.value = ''
})

const recipesContainer = document.querySelector('.recipes')
recipesContainer.addEventListener('click', async evt => {
	if(evt.target.tagName === "I") {
		const id = evt.target.getAttribute('data-id')
		await deleteDoc(doc(db, 'Recipe', id))
	}
})