<template>
  <Layout>
    <template #layout-bottom>
      <!-- Intercom integration will be added here -->
    </template>
  </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'

const { Layout } = DefaultTheme

onMounted(() => {
  // Intercom integration
  if (typeof window !== 'undefined') {
    // Add Intercom script
    window.intercomSettings = {
      api_base: "https://widget.intercom.io",
      app_id: "YOUR_INTERCOM_APP_ID" // Replace with actual app ID
    };

    // Load Intercom script
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = 'https://widget.intercom.io/widget/YOUR_INTERCOM_APP_ID'
    
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode?.insertBefore(script, firstScript)

    // Intercom boot function
    if (window.Intercom) {
      window.Intercom('boot', window.intercomSettings)
    } else {
      const intercomBootFunc = function() {
        window.Intercom('boot', window.intercomSettings)
      }
      
      if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', intercomBootFunc, false)
      } else if (document.attachEvent) {
        document.attachEvent('onreadystatechange', function() {
          if (document.readyState == 'complete') {
            intercomBootFunc()
          }
        })
      }
    }
  }
})
</script>

<style>
/* Custom styles for documentation site */
.VPNav .title {
  font-weight: 600;
}

.VPSidebar {
  --vp-sidebar-width: 280px;
}

/* Brand colors */
:root {
  --vp-c-brand-1: #4EB86F;
  --vp-c-brand-2: #07C983;
  --vp-c-brand-3: #15803D;
}

/* Dark mode brand colors */
.dark {
  --vp-c-brand-1: #4EB86F;
  --vp-c-brand-2: #07C983;
  --vp-c-brand-3: #15803D;
}
</style>