async function getUser() {
	try {
		const res = await axios.get('/users');
		const users = res.data;
		const list = document.getElementById('list');
		list.innerHTML = '';
		// display page and regist event per user
		Object.keys(users).map(function (key) {
			const userDiv = document.createElement('div');
			const span = document.createElement('span');
			span.textContent = users[key];
			const edit = document.createElement('button');
			edit.textContent = 'modify';
			edit.addEventListener('click', async () => {
				const name = prompt('input to edit name');
				if (!name) {
					return alert('You have to input name');
				}
			
				try {
					await axios.put('/user/' + key, { name });
					getUser();
				} catch (err) {
					console.error(err);
				}
			});

		    const remove = document.createElement('button');
		    remove.textContent = 'Delete';
		    remove.addEventListener('click', async () => {
		    	try{
		    		await axios.delete('/user/' + key);
		    		getUser();
		    	} catch (err) {
		    		console.error(err);
		    	}
		    });
		    userDiv.appendChild(span);
		    userDiv.appendChild(edit);
		    userDiv.appendChild(remove);
		    list.appendChild(userDiv);
		    console.log(res.data);
		});
	} catch(err) {
		console.error(err);
	}
}

window.onload = getUser; //call getUser when page loading

// on form submit
document.getElementById('form').addEventListener('submit', async(e) => {
	e.preventDefault();
	const name = e.target.username.value;
	if (!name) {
		return alert('Input Name');
	}
	try {
		await axios.post('/user', { name });
		getUser();
	} catch (err) {
		console.error(err);
	}
	e.target.username.value = "";
});
