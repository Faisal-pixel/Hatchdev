
class Laptop{
    keyboard: Keyboard[] = []
    nic: NetworkInterfaceCard
    screen: Display 
    hardDisk: HardDisk
    powerState: boolean = false
    bitKind: BitKind
    os: OS
    allUpdateLogs: string[] = [];

    constructor(keyboard: Keyboard, bit: BitKind, display: Display, nic: NetworkInterfaceCard, os: OS, harddisk: HardDisk){
        this.keyboard.push(keyboard)
        this.bitKind = bit
        this.screen = display
        this.nic = nic
        this.os = os
        this.hardDisk = harddisk
    }

    switchOn() {
        this.powerState = true
    }

    switchOff(){
        this.powerState = false
    }
    showAllUpdateLogs(){
        console.log("All updates made: " + this.allUpdateLogs.join("\n"))
    }

    private updateKeyboard (newValue) {
        !(newValue instanceof Keyboard) && ("Invalid input: The new value must be an instance of Display")
        this.keyboard.push(newValue)
        this.allUpdateLogs.push(`Keyboard updated: ${newValue.kind} keyboard with ${newValue.layout} layout`)
    }
    private updateNic(newValue){
        this.nic = newValue
        this.allUpdateLogs.push(`NIC updated: ${newValue.name}`)
        return "Invalid input: The new value must be an instance of NetworkInterfaceCard"
    }
    private updateDisplay(newValue){
        this.screen = newValue
        this.allUpdateLogs.push(`Display updated: ${newValue.size} inches ${newValue.type} display`)
        return "Invalid input: The new value must be an instance of Display"
    }
    private updateHardDisk(newValue){
        this.hardDisk = newValue
        this.allUpdateLogs.push(`HardDisk updated: ${newValue.type}`)
        return "Invalid input: The new value must be an instance of HardDisk"
    }
    private updateOS(newValue){
        this.os = newValue
        this.allUpdateLogs.push(`OS updated: ${newValue.type}`)
        return "Invalid input: The new value must be an instance of OS"
    }

    update<T extends Updateable>(thingToUpdate: T, newValue: T extends "keyboard" ? Keyboard :
    T extends "nic" ? NetworkInterfaceCard:
    T extends "display" ? Display :
    T extends "hardDisk" ? HardDisk :
    OS){
        let error: string = "";
        switch(thingToUpdate){
            case "keyboard":
                this.updateKeyboard(newValue)
                break
            case "nic":
                this.updateNic(newValue);
                break
            case "display":
                if(!(newValue instanceof Display)) {
                    error = "Invalid input: The new value must be an instance of Display"
                    return
                }
                this.screen = newValue
                this.allUpdateLogs.push(`Display updated: ${newValue.size} inches ${newValue.type} display`)
                break
            case "hardDisk":
                if(!(newValue instanceof HardDisk)) {
                    error = "Invalid input: The new value must be an instance of HardDisk"
                    return
                }
                this.hardDisk = newValue
                this.allUpdateLogs.push(`HardDisk updated: ${newValue.type}`)
                break
            case "os":
                if (!(newValue instanceof OS)) {
                    error = "Invalid input: The new value must be an instance of OS"
                    return
                }
                this.os = newValue
                this.allUpdateLogs.push(`OS updated: ${newValue.type}`)
                break
            default:
                console.log("Invalid input")
        }

        console.log(error)
        this.showAllUpdateLogs()
    }
}

class OS{
    type: "mac" | "windows" | "linux"

    set setOSType(val: "mac" | "windows" | "linux"){
        this.type = val
    }
}
class BitKind{
    type: "x32" | "x64" | "x86"
}
class Keyboard{
    kind: KeyboardKind
    layout: KeyboardLayout
    // keys: string[] 
    set setKind(val: KeyboardKind){
        this.kind = val
    }
    set setLayout(val: KeyboardLayout){
        this.layout = val
    }
}
type Updateable = "nic" | "os" | "display" | "keyboard" | "hardDisk" 
type KeyboardKind = "in-built" | "external"
type KeyboardLayout = "Qwerty" | "Azerty" | "Qwertz"

class NetworkInterfaceCard{
    name: string

    setName(val: string) {
        this.name = val
    }
}

class Display{
    size: number = 13
    type: DisplayType

    set displaySize(val: number){
        this.size = val
    }
    set displayType(type: DisplayType){
        this.type = type
    }
}
type DisplayType = "amoled" | "lcd" | "oled"

class HardDisk{
    type: "ssd" | "hdd"
    set setType(val: "ssd" | "hdd"){
        this.type = val
    }
}

export {Laptop, OS, BitKind, Keyboard, KeyboardKind, KeyboardLayout, NetworkInterfaceCard, Display, DisplayType, HardDisk};