<script>
	let name = "Chase";
	let age = 30;

	$: uppercaseName = name.toUpperCase();

	function incrementAge() {
		age += 1
	}

	function changeName() {
		name = 'Maximilian'
	}
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello, I am {uppercaseName}!</h1>
<h2>I am {age} years old!</h2>
<button on:click={incrementAge}>Increment Age</button>
<button on:click={changeName}>Change Name</button>
