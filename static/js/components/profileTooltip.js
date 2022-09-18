export const ProfileTooltip = {
  props: {
    avatar: {
      default: () => {},
      type: Object
    },
    presence: {
      default: true,
      type: Boolean
    }
  },
  template: `
    <v-layout column>
      <span v-if="presence" class="font-weight-medium text-uppercase">
        <small>{{ avatar.presence }}</small>
      </span>
      <span class="font-weight-medium">{{ avatar.alt }}</span>
      <span>{{ avatar.role }}</span>
    </v-layout>
  `
}