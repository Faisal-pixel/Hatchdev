
class Laptop{
    keyboard: Keyboard[] = []
    nic: NetworkInterfaceCard
    screen: Display 
    hardDisk: HardDisk
    powerState: boolean = false
    bitKind: BitKind
    os: OS

    constructor(bit: BitKind, display: Display, nic: NetworkInterfaceCard, os: OS, harddisk: HardDisk){
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

    update(thingToUpdate: string, newValue: any){
        const allUpdateLogs: string[] = [];
        let error: string = "";
        thingToUpdate.toLowerCase();
        switch(thingToUpdate){
            case "keyboard":
                error = !(newValue instanceof Keyboard) ? "Invalid input: The new value must be an instance of Keyboard" : "";
                this.keyboard.push(newValue)
                allUpdateLogs.push(`Keyboard updated: ${newValue.kind} keyboard with ${newValue.layout} layout`)
                break
            case "nic":
                error = (typeof newValue !== "string") ? "Invalid input: The new value must be a string" : "";
                this.nic.name = newValue
                allUpdateLogs.push(`NIC updated: ${newValue}`)
                break
            case "display":
                error = !(newValue instanceof Display) ? "Invalid input: The new value must be an instance of Display" : "";
                this.screen = newValue
                allUpdateLogs.push(`Display updated: ${newValue.size} inches ${newValue.type} display`)
                break
            case "hardDisk":
                error = !(newValue instanceof HardDisk) ? "Invalid input: The new value must be an instance of HardDisk" : "";
                this.hardDisk = newValue
                allUpdateLogs.push(`HardDisk updated: ${newValue.type}`)
                break
            case "os":
                error = !(newValue instanceof OS) ? "Invalid input: The new value must be an instance of OS" : "";
                this.os = newValue
                allUpdateLogs.push(`OS updated: ${newValue.type}`)
                break
            default:
                console.log("Invalid input")
        }

        console.log(error)
        console.log(allUpdateLogs.join("\n"))
    }
}

class OS{
    type: "mac" | "windows" | "linux"
}
class BitKind{
    type: "x32" | "x64" | "x86"
}
class Keyboard{
    kind: KeyboardKind
    layout: KeyboardLayout
    keys: string[] 
}

type KeyboardKind = "in-built" | "external"
type KeyboardLayout = "Qwerty" | "Azerty" | "Qwertz"

class NetworkInterfaceCard{
    name: string
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
}

const myLaptopDisplay = new Display();
myLaptopDisplay.displaySize = 15;
myLaptopDisplay.displayType = "amoled";

const myLaptop = new Laptop({type: "x64"}, myLaptopDisplay, {name: "Realtek"}, {type: "windows"}, {type: "ssd"})

console.log(myLaptop);
myLaptop.update("nic", "Intel");
console.log(myLaptop);