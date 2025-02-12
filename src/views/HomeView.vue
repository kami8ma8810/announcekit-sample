<script setup lang="ts">
import { ref } from 'vue'
import type { AnnouncekitInstance } from 'announcekit-vue'

const ankRef = ref<AnnouncekitInstance>()

const handleClick = () => ankRef.value?.open()
</script>

<template>
  <main>
    <button @click="handleClick" type="button">What's New</button>
    <AnnounceKit ref="ankRef" widget="https://announcekit.co/widgets/v2/4jlW8w" />
    <!-- <div class="col-md-10">

      <div class="form-group">
        <h2>Line widget</h2>
        It inherits parent style
        <br />
        <AnnounceKit catchClick=".ak-trigger" widget="https://announcekit.app/widgets/v2/35ULgQ" />
      </div>

      <AnnounceKit
        :float-widget="true"
        :widget-style="{ bottom: '100px' }"
        widget="https://announcekit.app/widgets/v2/q9imc"
      />
    </div> -->
  </main>
</template>
