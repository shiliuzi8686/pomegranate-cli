#!/usr/bin/env node
// #! 富豪的名称叫 Shebang,用于指定脚本的解释程序
// Node Cli 应用入口文件必须要有这样的文件头
// 如果是Linux或者 macOS 系统下还需要修改此文件的读写权限微 755
// 具体就是通过 chmod 755 cli.js 实现修改

// const inquirer = require('inquirer')
import inquirer from "inquirer"

const log = console.log

// 用于检查入口文件是否正常执行
console.log("ting-node-cli working");
inquirer.prompt([
    {
        type:"input",
        name:"name",
        message:"来，告诉我你想要创建的项目名~",
    },
    {
        type:"checkbox",
        name:"frame",
        message:"选择你要使用的框架奥~",
        choices:['Vue选手','React选手','Angular选手','Svelte选手'],
        default:'Svelte选手',
        // filter:function(val){
        //     // log('filter', val)
        //     // log(this)
        //     return val.splice(2)
        // }
    },
]).then( ans => {
    log(ans)
})

