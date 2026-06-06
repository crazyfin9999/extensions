/*
   Created with ExtForge
   https://jwklong.github.io/extforge
*/
(async function(Scratch) {
    const variables = {};


    if (!Scratch.extensions.unsandboxed) {
        alert("This extension needs to be unsandboxed to run!")
        return
    }

    const ExtForge = {
        Broadcasts: new function() {
            this.raw_ = {};
            this.register = (name, blocks) => {
                this.raw_[name] = blocks;
            };
            this.execute = async (name) => {
                if (this.raw_[name]) {
                    await this.raw_[name]();
                };
            };
        },

        Variables: new function() {
            this.raw_ = {};
            this.set = (name, value) => {
                this.raw_[name] = value;
            };
            this.get = (name) => {
                return this.raw_[name] ?? null;
            }
        },

        Vector: class {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }

            static from(v) {
                if (v instanceof ExtForge.Vector) return v
                if (v instanceof Array) return new ExtForge.Vector(Number(v[0]), Number(v[1]))
                if (v instanceof Object) return new ExtForge.Vector(Number(v.x), Number(v.y))
                return new ExtForge.Vector()
            }

            add(v) {
                return new Vector(this.x + v.x, this.y + v.y);
            }

            set(x, y) {
                return new Vector(x ?? this.x, y ?? this.y)
            }
        },

        Utils: {
            setList: (list, index, value) => {
                [...list][index] = value;
                return list;
            },
            lists_foreach: {
                index: [0],
                value: [null],
                depth: 0
            },
            countString: (x, y) => {
                return y.length == 0 ? 0 : x.split(y).length - 1
            }
        }
    }

    class Extension {
        getInfo() {
            return {
                "id": "crazyfinutils",
                "name": "Extension",
                "color1": "#da7272",
                "blocks": [{
                    "opcode": "block_6c11a988f99affce",
                    "text": "Last Key Pressed",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_8e915c0632040182",
                    "text": "All Keys Pressed",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_0b900df58c38f21d",
                    "text": "wait [1dc154e18b7c7238] minutes",
                    "blockType": "command",
                    "arguments": {
                        "1dc154e18b7c7238": {
                            "type": "number",
                            "defaultValue": 0
                        }
                    }
                }, {
                    "opcode": "block_be86759c2c6a4853",
                    "text": "wait [b8aca424b3e7db68] hours",
                    "blockType": "command",
                    "arguments": {
                        "b8aca424b3e7db68": {
                            "type": "number",
                            "defaultValue": 2
                        }
                    }
                }, {
                    "opcode": "block_6ece05224d7ca85c",
                    "text": "wait until next frame",
                    "blockType": "command",
                    "arguments": {}
                }, {
                    "opcode": "block_4bf85d4ccc2495c2",
                    "text": "wait [017716a285384e3f] frames",
                    "blockType": "command",
                    "arguments": {
                        "017716a285384e3f": {
                            "type": "number",
                            "defaultValue": 5
                        }
                    }
                }]
            }
        }
        async block_6c11a988f99affce(args) {
            return ((Scratch.vm.runtime.ioDevices.keyboard.getAllKeysPressed()[(Scratch.vm.runtime.ioDevices.keyboard.getAllKeysPressed().length) - 1]))
        }
        async block_8e915c0632040182(args) {
            return (Scratch.vm.runtime.ioDevices.keyboard.getAllKeysPressed())
        }
        async block_0b900df58c38f21d(args) {
            await new Promise(resolve => setTimeout(() => resolve(), (args["1dc154e18b7c7238"] * (60)) * 1000));
        }
        async block_be86759c2c6a4853(args) {
            await new Promise(resolve => setTimeout(() => resolve(), (args["b8aca424b3e7db68"] * (3600)) * 1000));
        }
        async block_6ece05224d7ca85c(args) {
            await new Promise(temp_a7a3614fa71c13538fea4ebd => {
                requestAnimationFrame(() => {
                    temp_a7a3614fa71c13538fea4ebd()
                })
            })
        }
        async block_4bf85d4ccc2495c2(args) {
            for (var temp_7360c16337bc0775e4b61326 = 0; temp_7360c16337bc0775e4b61326 < args["017716a285384e3f"]; temp_7360c16337bc0775e4b61326++) {
                await new Promise(temp_9f2071e02714ae32fd209f6e => {
                    requestAnimationFrame(() => {
                        temp_9f2071e02714ae32fd209f6e()
                    })
                })
            };
        }
    }

    let extension = new Extension();
    // code compiled from extforge

    Scratch.extensions.register(extension);
})(Scratch);