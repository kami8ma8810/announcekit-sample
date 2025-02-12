declare module 'announcekit-vue' {
  import { Plugin, DefineComponent } from 'vue'

  export interface AnnouncekitInstance {
    open(): void
    close(): void
  }

  export const AnnounceKit: DefineComponent<{
    widget: string
    catchClick?: string
    floatWidget?: boolean
    widgetStyle?: Record<string, string>
  }>

  const AnnouncekitPlugin: Plugin
  export default AnnouncekitPlugin
}
