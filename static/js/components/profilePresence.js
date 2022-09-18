export const ProfilePresence = {
  props: {
    presence: {
      default: 'away',
      type: String
    }
  },
  computed: {
    presenceColour () {
      switch (this.presence.toLowerCase()) {
        case 'away':
          return 'orange'
        case 'busy':
          return 'red'
        case 'holiday':
          return 'purple'
        case 'offline':
          return 'grey'
        case 'online':
          return 'success'
      }
    }
  },
  template: `
    <div class="presence" :class="presenceColour"></div>
  `
}