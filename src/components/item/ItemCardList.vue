<template lang="html">
  <div class="columns is-multiline">
    <div class="column is-half"
         v-for="item in filteredShopItems"
         :key="item.id">
      <ItemCard :item="item"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ItemCard from './ItemCard'

export default {
  name: 'ItemCardList',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    ItemCard
  },
  computed: {
    ...mapState('shopItem', ['shopItemSearchTerm']),
    filteredShopItems () {
      return this.items
        .filter(item => {
          const nameMatched = item.name.indexOf(this.shopItemSearchTerm) >= 0
          const descMatched = item.description.indexOf(this.shopItemSearchTerm) >= 0

          return nameMatched || descMatched
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';

.columns {
  background: #eee;
  padding-bottom: $column-gap;
}

.column {
  padding-bottom: 0;

  &:nth-child(odd) {
    padding-right: .375rem;
  }
  &:nth-child(even) {
    padding-left: .375rem;
  }
}
</style>
