<template>
  <component :is="wrapperL" :class="wrapClassL" v-if="!hidden">
    <component v-if="prefix2L" :is="prefixEl2L" :class="prefixClass2L">{{
      prefix2L
    }}</component>

    <component v-if="prefixL" :is="prefixElL" :class="prefixClassL">{{
      prefixL
    }}</component>

    <component v-if="valueL" v-html="valueL" :class="valueWrapClassL" :is="valueElL"></component>
    <q-spinner-ball v-else color="orange" :class="valueWrapClassL"/>

    <component v-if="postfixL" :is="postfixElL" :class="postfixClassL">{{
      postfixL
    }}</component>

    <component v-if="postfix2L" :is="postfixEl2L" :class="postfixClass2L">{{
      postfix2L
    }}</component>
  </component>
</template>

<script>
// L stands for 'local'
export default {
  name: "el",
  props: {
    //Values
    value: undefined,
    prefix: [String, undefined],
    prefix2: [String, undefined],
    postfix: [String, undefined],
    postfix2: [String, undefined],
    hidden: [Boolean, undefined],
    //wrapers
    wrapper: {
      type: String,
      required: false,
      default: "div",
    },
    wrapClass: [String, undefined],

    valueWrapClass: [String, undefined],
    valueEl: {
      type: [String, undefined],
      default: "span",
    },

    prefixEl: {
      type: [String, undefined],
      default: "span",
    },
    prefixClass: [String, undefined],

    postfixEl: {
      type: [String, undefined],
      default: "span",
    },
    postfixClass: [String, undefined],

    postfixEl2: {
      type: [String, undefined],
      default: "span",
    },
    postfixClass2: [String, undefined],

    prefixEl2: {
      type: [String, undefined],
      default: "span",
    },
    prefixClass2: [String, undefined],
  },
  data() {
    const res = this.parseProps(this.$props);
    return res;
  },
  methods: {
    parseProps(props) {
      const res = {};
      Object.entries(props).forEach(([key, value]) => (res[key + "L"] = value));
      return res;
    },
    implementVal(val) {
      //Check if val is actually object of settings. Rewrite props with those settings
      if (val && typeof val === "object") {
        Object.entries(val).forEach(([key, value]) => {
          this[key + "L"] = value;
        });
      } else this.valueL = val;
    },
  },
  beforeMount() {
    this.implementVal(this.value);
  },
  watch: {
    value: function () {
      this.implementVal(this.value);
    },
  },
};
</script>

<style>
</style>