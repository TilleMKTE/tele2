<script>
    import { goto } from '$app/navigation';
    let username = '';
    let password = '';
    let message = '';
  
    /** @param {Event} e */
    const login = async (e) => {
      e.preventDefault();
      if (!username || !password) {
        message = "Udfyld begge felter for at logge ind.";
        return;
      }
  
      const res = await fetch('/spgs/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
  
      if (res.ok) {
        goto('/spgs');
      } else {
        message = 'Forkert brugernavn eller adgangskode';
      }
    };
  </script>
  
  <h1 id="welcome">Velkommen til selvevaluering</h1>
  <div class="login-box">
    <h2>Login</h2>
    <form on:submit={login}>
      <input bind:value={username} type="text" placeholder="Email" required />
      <input bind:value={password} type="password" placeholder="Adgangskode" required />
      <button type="submit">Log ind</button>
    </form>
    <p id="message">{message}</p>
  </div>