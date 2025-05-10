<script lang="ts">
    import { goto } from '$app/navigation';
  
    const submitAnswers = (e: SubmitEvent) => {
      e.preventDefault();
      goto('/tak');
    };
  </script>
  
  <h1 id="welcome">Her er dine spørgsmål – Svar på dem så godt du kan</h1>
  <div class="question-box">
    <form on:submit={submitAnswers}>
      <div class="question">
        <p><strong>1. Føler du dig generelt trist?</strong></p>
        <label><input type="radio" name="q1" value="Slet ikke"> Slet ikke</label><br>
        <label><input type="radio" name="q1" value="Nogen gange, men er i godt humør"> Nogen gange, men er i godt humør</label><br>
        <label><input type="radio" name="q1" value="Ja, men har stadig mod på dagen"> Ja, men har stadig mod på dagen</label><br>
        <label><input type="radio" name="q1" value="Ja, orker heller ikke rigtig min dag"> Ja, orker heller ikke rigtig min dag</label><br>
        <label><input type="radio" name="q1" value="Ja helt vildt, ved ikke hvad jeg skal stille op"> Ja helt vildt, ved ikke hvad jeg skal stille op</label>
      </div>
  
      <br>
  
      <div class="question">
        <p><strong>2. I løbet af de sidste tre dage, har du så haft problemer med at sove?</strong></p>
        <label><input type="radio" name="q2" value="Slet ikke"> Slet ikke</label><br>
        <label><input type="radio" name="q2" value="Ja, en enkel nat var det svært at falde i søvn"> Ja, en enkel nat var det svært at falde i søvn</label><br>
        <label><input type="radio" name="q2" value="Ja, har slet ikke kunne falde i søvn to eller alle nætterne"> Ja, har slet ikke kunne falde i søvn to eller alle nætterne</label>
      </div>
  
      <br><br>
  
      <button type="submit">Send svar</button>
    </form>
  </div>
  