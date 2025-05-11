import { writable } from 'svelte/store';

export const answersStore = writable<{ q1: string; q2: string }>({
  q1: '',
  q2: ''
});