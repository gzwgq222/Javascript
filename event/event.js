let corp = {};
corp.list = {};
corp.on = function (key, fn) {
  if (!this.list[key]) this.list[key] = []
  this.list[key].push(fn);
}
corp.emit = function (...args) {
    const key = args.shift(),
          fns = this.list[key];
    if (!fns || !fns.length) {
      return false;
    }
    fns.forEach(cb => {
        cb.apply(this, args);
    })
}
  
// 测试用例
corp.on('getMe', (position, salary) => {
    console.log('期望的职位：', position);
    console.log('期望的薪水：', salary);
})

corp.on('getSkill', (skill, hobby) => {
    console.log('你的技能：', skill);
    console.log('你的爱好：', hobby);
})

corp.emit('getMe', '前端开发', '20000元');
corp.emit('getMe', '后端开发', '22000元');
corp.emit('getSkill', 'UI设计', '18000元');