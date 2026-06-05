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
                "id": "extensionID",
                "name": "EVIL blocks",
                "color1": "#ff0000",
                "blocks": [{
                    "opcode": "block_90daf50f79c7c1f4",
                    "text": "wait [9008b97b7242c206] evil seconds",
                    "blockType": "command",
                    "arguments": {
                        "9008b97b7242c206": {
                            "type": "string"
                        }
                    }
                }, {
                    "opcode": "block_57af889b163df5c0",
                    "text": "Wait until evil [6d8d4670d468babe]",
                    "blockType": "command",
                    "arguments": {
                        "6d8d4670d468babe": {
                            "type": "Boolean"
                        }
                    }
                }, {
                    "opcode": "block_bcdd67b6f3c1b91f",
                    "text": "evil [269f2869265e6368]   +   evil [b4806a991e7a76ac]",
                    "blockType": "reporter",
                    "arguments": {
                        "269f2869265e6368": {
                            "type": "number",
                            "defaultValue": 2
                        },
                        "b4806a991e7a76ac": {
                            "type": "number",
                            "defaultValue": 3
                        }
                    }
                }, {
                    "opcode": "block_42195acc3a94dede",
                    "text": "evil [98d608bf6c5ac676]  -   evil [d055c369826ffc97]",
                    "blockType": "reporter",
                    "arguments": {
                        "98d608bf6c5ac676": {
                            "type": "number",
                            "defaultValue": 0
                        },
                        "d055c369826ffc97": {
                            "type": "number",
                            "defaultValue": 0
                        }
                    }
                }, {
                    "opcode": "block_cd84d3b390743dbb",
                    "text": "evil pick random  [1e0bd23adcacb06b] to [c8a7b622918ee4f5]",
                    "blockType": "reporter",
                    "arguments": {
                        "1e0bd23adcacb06b": {
                            "type": "number",
                            "defaultValue": 0
                        },
                        "c8a7b622918ee4f5": {
                            "type": "number",
                            "defaultValue": 0
                        }
                    }
                }]
            }
        }
        async block_90daf50f79c7c1f4(args) {
            await new Promise(resolve => setTimeout(() => resolve(), (Scratch.Cast.toNumber(args["9008b97b7242c206"]) - Scratch.Cast.toNumber(args["9008b97b7242c206"])) * 1000));
        }
        async block_57af889b163df5c0(args) {
            await new Promise(temp_98d48fd258d036a7b1428af2 => {
                let temp_3927be620e0b67d7a14933cd = () => false ? temp_98d48fd258d036a7b1428af2() : requestAnimationFrame(temp_3927be620e0b67d7a14933cd);
                temp_3927be620e0b67d7a14933cd()
            })
        }
        async block_bcdd67b6f3c1b91f(args) {
            return ((((0) - args["269f2869265e6368"]) + ((0) - args["b4806a991e7a76ac"])))
        }
        async block_42195acc3a94dede(args) {
            return ((((0) - args["98d608bf6c5ac676"]) - ((0) - args["d055c369826ffc97"])))
        }
        async block_cd84d3b390743dbb(args) {
            eval(("alert(\"hahahahaha it is 2 every time because its EVIL\")"))
            return (("2"))
        }
    }

    let extension = new Extension();
    // code compiled from extforge

    Scratch.extensions.register(extension);
})(Scratch);