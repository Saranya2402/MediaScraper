module.exports = (sequelize, DataTypes) => {

    const urlDetail = sequelize.define("urldetail", {
        url: {
            type: DataTypes.STRING,
            allowNull:false
            
        },
        image_path:{
            type: DataTypes.STRING
        }
    })

    return urlDetail

}