---
title: Rasmus
description: The best in the world
---

# Rasmus
::skills
---
title: Skills
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a iaculis nisi, sit amet congue nisi. Etiam dui eros, laoreet nec gravida et, suscipit sed massa. Proin magna lectus, euismod sit amet nisi quis, finibus eleifend leo. Donec nec tempus augue. Donec purus mi, cursus a eros non, ornare dictum massa. Proin congue ex quis consequat dapibus. Duis tortor urna, commodo a nisi eu, sollicitudin lobortis sem. Vestibulum luctus vel mi nec pretium. Curabitur venenatis dui nec lacinia euismod.
---
::
::experience
---
title: Experience
---
Lorem **ipsum dolor** sit amet, consectetur adipiscing elit. `Maecenas` a iaculis nisi, sit amet congue nisi. Etiam dui eros, laoreet nec gravida et, suscipit sed massa.
::

  ```vue [~/components/file.vue]
<script setup lang="ts">
  interface Props {
    item: {
      title: string
      company?: string
      location?: string
      startDate: Date
      endDate?: Date
    }
  }

  defineProps<Props>()

  function getYear(date: Date | null | undefined) {
    if (!date) return 'Present'

    return new Date(date).getFullYear()
  }
</script>
  ```
