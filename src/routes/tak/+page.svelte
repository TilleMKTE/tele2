<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { answersStore } from '$lib/stores/answers';

onMount(async () => {
  const answers = get(answersStore);
  console.log('Svar der sendes til DB:', answers); // ← til fejlsøgning

  if (!answers.q1 || !answers.q2) {
    console.warn('Svar mangler – sender ikke til databasen.');
    return;
  }

  try {
    const res = await fetch('/api/answers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answers)
    });

    if (!res.ok) {
      console.error('Fejl ved sending til database:', await res.text());
    }
  } catch (err) {
    console.error('Fetch-fejl:', err);
  }
});
</script>

<div class="message-box">
  <h1>Tak for dine svar!</h1>
  <p>De er nu sendt til lægen.</p>
</div>