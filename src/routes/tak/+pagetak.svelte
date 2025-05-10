<script>
    import { goto } from '$app/navigation';
  
    const logout = async () => {
      await fetch('/tak/API/logout', {
        method: 'POST'
      });
      goto('/login');
    };
  </script>
  
  <div class="message-box">
    <h1>Lægen har modtaget dine svar</h1>
    <p>Godt gået!</p>
  </div>
  
  <button class="logout-btn" on:click={logout}>Log ud</button>