function solution(skill, skill_trees) {
   let count = skill_trees.length
   
   skill_trees.forEach((skillTree) => {
       const skillStack = [...skill]
       for (let i = 0; i< skillTree.length; i++){
           if(!skill.includes(skillTree[i])) continue
           if(skillStack.shift() !== skillTree[i]){
               count -= 1
               break
           }
           
       }
   })
    return count
}