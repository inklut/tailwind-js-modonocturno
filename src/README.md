```html
    <div class="flex items-center space-x-2">
		<span class="text-sm mr-2 dark:text-gray-600">Claro</span>
		<div>
			<input class="hidden" type="checkbox" name="toggle" id="toggle" />
			<label for="toggle">
				<div>
					<div class="w-9 h-5 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1">
						<div class="w-4 h-4 toggle-dot bg-white rounded-full shadow-md transform duration-300 ease-in-out"></div>
					</div>
				</div>
			</label>
		</div>
		<span class="text-sm ml-2 dark:text-gray-600">Obscuro</span>
	</div> 
```
Script 1
```js
const checkbox = document.querySelector('#toggle');
const html = document.querySelector('html');

const toggleDarkMode = function () {
    checkbox.checked
    ? html.classList.add('dark')
    : html.classList.remove('dark')
};

toggleDarkMode();
checkbox.addEventListener('click', toggleDarkMode);
```
Script 2
```js
document.getElementById('toggle').addEventListener('click', function() {
    let html = document.querySelector('html').classList;
    if(localStorage.theme == 'dark') {
        html.remove('dark')
        localStorage.removeItem('theme')
    } else {
        html.add('dark')
        localStorage.theme = 'dark';
    }

localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
})
```