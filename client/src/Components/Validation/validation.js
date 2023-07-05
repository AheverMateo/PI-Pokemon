
const validation = (error) => {
    const regexName = /^(?!.*\s{2})[a-zA-Z\s]{2,18}$/;
    let err = {}
    if (!regexName.test(error.name)) err.name = "enter a valid name"
    if (error.life < 0 || error.life > 200 ) err.life = "Between 0 and 200"
    if (error.attack < 0 || error.attack > 200) err.attack = "Between 0 and 200"
    if (error.defense < 0 || error.defense > 200 ) err.defense = "Between 0 and 200"
    if (error.speed < 0 || error.speed > 200 ) err.speed = "Between 0 and 200"
    if (error.height < 0 || error.height > 100) err.height = "Between 0 and 100"
    if (error.weight < 0 || error.weight > 800) err.weight = "Between 0 and 800"
    if (!/.(gif|jpeg|jpg|png)$/i.test(error.img) && error.img !== "") { err.img = "Must be a image url with format jpg, gif, png!"};
    return err
}
  

export default validation;
