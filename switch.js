class SwitchButton
{
    status 
    lamp
    constructor(status)
    {
        this.status= status
    }
    connectToLamp(lamp)
    {
        this.lamp = lamp 
    }
    switchOn()
    {
        if( this.lamp == undefined)
        {
            console.log("Ket noi voi lamp truoc")
        }else 
        {
            this.lamp.turnOn()
            this.lamp = true 
        }
    }
    switchOff()
    {
        if ( this.lamp == undefined)
        {
            console.log("ket noi voi lamp truoc")
        }else 
        {
            this.lamp.turnOff()
            this.status = false 
        }
    }
}