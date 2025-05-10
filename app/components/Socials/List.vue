<script setup lang="ts">
const { general } = useAppConfig()

function onClick() {}
</script>

<template>
  <nav>
    <ul class="flex flex-col md:flex-row gap-y-6 items-center gap-x-4">
      <SocialsItem
        url="https://github.com/"
        :handle="general.github"
        provider="github"
      />
      <SocialsItem
        url="https://linkedin.com/in/"
        :handle="general.linkedin"
        provider="linkedin"
      />
      <SocialsItem
        url="https://bsky.app/"
        :handle="general.bluesky"
        provider="bluesky"
      />
      <SocialsItem
        url="https://x.com/"
        :handle="general.twitter"
        provider="x"
      />
      <NuxtLink
        to="http://localhost:3000/email"
        :external="true"
        target="_blank"
        class="text-sm md:text-xs text-default hover:text-primary transition duration-300"
      >
        send email
      </NuxtLink>
    </ul>
  </nav>
</template>
