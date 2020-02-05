export default {
  up() {},
  down(size) {
    const sizes = {
      sm: "575.98",
      md: "767.98",
      lg: "991.98",
      xl: "1199.98"
    };
    return `@media (max-width : ${sizes[size]}px)`;
  }
};
