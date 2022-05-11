<template>
  <form class="rating_star">
    <fieldset>
      <span>Рейтинг:</span>
      <pre>{{ ratingStar }}</pre>
      <span class="star-cb-group">
        <input type="radio" id="rating-5" name="rating" value="5" /><label
          for="rating-5"
          >5</label
        >
        <input
          type="radio"
          id="rating-4"
          name="rating"
          value="4"
          checked="checked"
        /><label for="rating-4">4</label>
        <input type="radio" id="rating-3" name="rating" value="3" /><label
          for="rating-3"
          >3</label
        >
        <input type="radio" id="rating-2" name="rating" value="2" /><label
          for="rating-2"
          >2</label
        >
        <input type="radio" id="rating-1" name="rating" value="1" /><label
          for="rating-1"
          >1</label
        >
        <input
          type="radio"
          id="rating-0"
          name="rating"
          value="0"
          class="star-cb-clear"
        /><label for="rating-0">0</label>
      </span>
    </fieldset>
  </form>
</template>
<script>
export default {
  data() {
    return {
      rating: [{num: 5, value: 252},{num:4, value:124},{num:3, value:40}, {num:2, value:29},{num:1, value:33}],
      ratingStar: (5 * 252 + 4 * 124 + 3 * 40 + 2 * 29 + 1 * 33) / 478
    }
  },
  methods: {
    ratingcalc(v){

    }
  },
}
</script>
<style lang="sass">
$unchecked-star: '\2606'
$unchecked-color: #888
$checked-star: '\2605'
$checked-color: #e52
.rating_star
  margin: 20px 0
.star-cb-group
  display: flex
  flex-direction: row-reverse
  *
    font-size: 1rem
    unicode-bidi: bidi-override
    direction: rtl
  & > input
    display: none
    & + label
      position: relative
      display: inline-block
      overflow: hidden
      text-indent: 9999px
      width: 20px
      margin-left: 5px
      white-space: nowrap
      cursor: pointer
      &:before
        position: absolute
        display: inline-block
        text-indent: -9999px
        content: $unchecked-star
        color: $unchecked-color
        font-size: 24px
        top: -8px
    &:checked ~ label:before,
    & + label:hover ~ label:before,
    & + label:hover:before
      content: $checked-star
      color: #e52
      text-shadow: 0 0 1px #333
  & > .star-cb-clear + label
    text-indent: -9999px
    width: .5em
    margin-left: -.5em
  & > .star-cb-clear + label:before
    width: .5em
  &:hover > input + label:before
    content: $unchecked-star
    color: $unchecked-color
    text-shadow: none
  &:hover > input + label:hover ~ label:before,
  &:hover > input + label:hover:before
    content: $checked-star
    color: $checked-color
    text-shadow: 0 0 1px #333
fieldset
  border: 0
  width: 220px
  display: flex
  gap: 15px
</style>