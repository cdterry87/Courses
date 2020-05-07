<script>
  import ContactCard from "./ContactCard.svelte";

  let name = "Chase";
  let age = 30;

  $: uppercaseName = name.toUpperCase();

  function incrementAge() {
    age += 1;
  }

  function changeName() {
    name = "Maximilian";
  }

  function nameInput(event) {
    const enteredValue = event.target.value;
    name = enteredValue;
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
<!-- <button on:click={changeName}>Change Name</button> -->
<!-- <input type="text" value={name} on:input="{nameInput}"> -->
<input type="text" bind:value={name} />

<ContactCard userName={name} />
