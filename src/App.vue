<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { supabase } from '@/lib/supabaseClient'

// Описываем структуру проекта, чтобы TypeScript не ругался
interface Project {
  id: number
  name: string
  slug: string
  status: string
  created_at: string
}

const projects = ref<Project[]>([])

onMounted(async () => {
  // Запрашиваем данные из таблицы 'projects'
  const { data, error } = await supabase.from('projects').select('*')

  if (error) {
    console.error('❌ Ошибка запроса к Supabase:', error.message)
  } else {
    console.log('✅ База работает! Получено проектов:', data?.length)
    projects.value = data || []
  }
})
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}
</style>
