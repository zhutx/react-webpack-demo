module.exports = {
    "parserOptions": {
        "ecmaVersion": 7, // ECMAScript版本，7为ES7
        "sourceType": "module", //默认script，如果代码是ECMAScript模块，设置为module
        "ecmaFeatures": { // 使用额外的语言特性
            "jsx": true // 启用JSX
        }
    },
    // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量
    // 避免访问未定义的环境变量而发出告警
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
    },
    // 脚本在执行期间访问的额外的全局变量
    // 避免访问未定义的环境变量而发出告警
    "globals": {
        "document": true,
        "navigator": true,
        "window":true,
        "node":true
    },
    // 继承第三方校验规则eslint-config-airbnb
    "extends": "airbnb",
    // eslint-config-airbnb包括了以下3个插件
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    // 定制自己的规则
    "rules": {
        "comma-dangle": ["error", "never"], // 要求或禁止末尾逗号：不允许逗号
        "indent": ["error", 4], // JavaScript代码强制使用一致的缩进：4格缩进
        "linebreak-style": "off",
    }
};