/**
 * todo：在package.json里面设置了对应了相应的环境;
 * */
const configCommon = { // 公用key等参数
 
};
const RD = { // 测试环境

};
const production = {// 生产环境
  ...configCommon,
};

const NODETRIM = process.env.VUE_APP_CONFIG.replace(/\s/g, "");

const config = ({
  dev: RD,
  RD,
  production,
})[NODETRIM];

export default config;
