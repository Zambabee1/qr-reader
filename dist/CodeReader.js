(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.CodeReader = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function fixProto(target, prototype) {
        var setPrototypeOf = Object.setPrototypeOf;
        setPrototypeOf ? setPrototypeOf(target, prototype) : (target.__proto__ = prototype);
    }

    function fixStack(target, fn) {
        if (fn === void 0) {
            fn = target.constructor;
        }
        var captureStackTrace = Error.captureStackTrace;
        captureStackTrace && captureStackTrace(target, fn);
    }





    var CustomError = (function (_super) {
        __extends(CustomError, _super);
        function CustomError(message) {
            var _newTarget = this.constructor;
            var _this = _super.call(this, message) || this;
            Object.defineProperty(_this, 'name', {
                value: _newTarget.name,
                enumerable: false
            });
            fixProto(_this, _newTarget.prototype);
            fixStack(_this);
            return _this;
        }
        
        return CustomError;
    })(Error);

    /**
     * Custom Error class of type Exception.
     */
    class Exception extends CustomError {
        /**
         * Allows Exception to be constructed directly
         * with some message and prototype definition.
         */
        constructor(message = undefined) {
            super(message);
            this.message = message;
        }
    }

    /**
     * Custom Error class of type Exception.
     */
    class ArgumentException extends Exception {
    }

    /**
     * Custom Error class of type Exception.
     */
    class IllegalArgumentException extends Exception {
    }

    /**
     * Custom Error class of type Exception.
     */
    class ChecksumException extends Exception {
        static getChecksumInstance() {
            return new ChecksumException();
        }
    }

    class System {
        // public static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length)
        /**
         * Makes a copy of a array.
         */
        static arraycopy(src, srcPos, dest, destPos, length) {
            // TODO: better use split or set?
            while (length--) {
                dest[destPos++] = src[srcPos++];
            }
        }
        /**
         * Returns the current time in milliseconds.
         */
        static currentTimeMillis() {
            return Date.now();
        }
    }

    /**
     * Ponyfill for Java's Integer class.
     */
    class Integer {
        static numberOfTrailingZeros(i) {
            let y;
            if (i === 0)
                return 32;
            let n = 31;
            y = i << 16;
            if (y !== 0) {
                n -= 16;
                i = y;
            }
            y = i << 8;
            if (y !== 0) {
                n -= 8;
                i = y;
            }
            y = i << 4;
            if (y !== 0) {
                n -= 4;
                i = y;
            }
            y = i << 2;
            if (y !== 0) {
                n -= 2;
                i = y;
            }
            return n - ((i << 1) >>> 31);
        }
        static numberOfLeadingZeros(i) {
            // HD, Figure 5-6
            if (i === 0) {
                return 32;
            }
            let n = 1;
            if (i >>> 16 === 0) {
                n += 16;
                i <<= 16;
            }
            if (i >>> 24 === 0) {
                n += 8;
                i <<= 8;
            }
            if (i >>> 28 === 0) {
                n += 4;
                i <<= 4;
            }
            if (i >>> 30 === 0) {
                n += 2;
                i <<= 2;
            }
            n -= i >>> 31;
            return n;
        }
        static toHexString(i) {
            return i.toString(16);
        }
        static toBinaryString(intNumber) {
            return String(parseInt(String(intNumber), 2));
        }
        // Returns the number of one-bits in the two's complement binary representation of the specified int value. This function is sometimes referred to as the population count.
        // Returns:
        // the number of one-bits in the two's complement binary representation of the specified int value.
        static bitCount(i) {
            // HD, Figure 5-2
            i = i - ((i >>> 1) & 0x55555555);
            i = (i & 0x33333333) + ((i >>> 2) & 0x33333333);
            i = (i + (i >>> 4)) & 0x0f0f0f0f;
            i = i + (i >>> 8);
            i = i + (i >>> 16);
            return i & 0x3f;
        }
        static truncDivision(dividend, divisor) {
            return Math.trunc(dividend / divisor);
        }
        /**
         * Converts A string to an integer.
         * @param s A string to convert into a number.
         * @param radix A value between 2 and 36 that specifies the base of the number in numString. If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.
         */
        static parseInt(num, radix = undefined) {
            return parseInt(num, radix);
        }
    }
    Integer.MIN_VALUE_32_BITS = -2147483648;
    Integer.MAX_VALUE = Number.MAX_SAFE_INTEGER;

    /**
     * Custom Error class of type Exception.
     */
    class IndexOutOfBoundsException extends Exception {
    }

    /**
     * Custom Error class of type Exception.
     */
    class ArrayIndexOutOfBoundsException extends IndexOutOfBoundsException {
        constructor(index = undefined, message = undefined) {
            super(message);
            this.index = index;
            this.message = message;
        }
    }

    class Arrays {
        /**
         * Assigns the specified int value to each element of the specified array
         * of ints.
         *
         * @param a the array to be filled
         * @param val the value to be stored in all elements of the array
         */
        static fill(a, val) {
            for (let i = 0, len = a.length; i < len; i++)
                a[i] = val;
        }
        /**
         * Assigns the specified int value to each element of the specified
         * range of the specified array of ints.  The range to be filled
         * extends from index {@code fromIndex}, inclusive, to index
         * {@code toIndex}, exclusive.  (If {@code fromIndex==toIndex}, the
         * range to be filled is empty.)
         *
         * @param a the array to be filled
         * @param fromIndex the index of the first element (inclusive) to be
         *        filled with the specified value
         * @param toIndex the index of the last element (exclusive) to be
         *        filled with the specified value
         * @param val the value to be stored in all elements of the array
         * @throws IllegalArgumentException if {@code fromIndex > toIndex}
         * @throws ArrayIndexOutOfBoundsException if {@code fromIndex < 0} or
         *         {@code toIndex > a.length}
         */
        static fillWithin(a, fromIndex, toIndex, val) {
            Arrays.rangeCheck(a.length, fromIndex, toIndex);
            for (let i = fromIndex; i < toIndex; i++)
                a[i] = val;
        }
        /**
         * Checks that {@code fromIndex} and {@code toIndex} are in
         * the range and throws an exception if they aren't.
         */
        static rangeCheck(arrayLength, fromIndex, toIndex) {
            if (fromIndex > toIndex) {
                throw new IllegalArgumentException('fromIndex(' + fromIndex + ') > toIndex(' + toIndex + ')');
            }
            if (fromIndex < 0) {
                throw new ArrayIndexOutOfBoundsException(fromIndex);
            }
            if (toIndex > arrayLength) {
                throw new ArrayIndexOutOfBoundsException(toIndex);
            }
        }
        static asList(...args) {
            return args;
        }
        static create(rows, cols, value) {
            let arr = Array.from({ length: rows });
            return arr.map(x => Array.from({ length: cols }).fill(value));
        }
        static createInt32Array(rows, cols, value) {
            let arr = Array.from({ length: rows });
            return arr.map(x => Int32Array.from({ length: cols }).fill(value));
        }
        static equals(first, second) {
            if (!first) {
                return false;
            }
            if (!second) {
                return false;
            }
            if (!first.length) {
                return false;
            }
            if (!second.length) {
                return false;
            }
            if (first.length !== second.length) {
                return false;
            }
            for (let i = 0, length = first.length; i < length; i++) {
                if (first[i] !== second[i]) {
                    return false;
                }
            }
            return true;
        }
        static hashCode(a) {
            if (a === null) {
                return 0;
            }
            let result = 1;
            for (const element of a) {
                result = 31 * result + element;
            }
            return result;
        }
        static fillUint8Array(a, value) {
            for (let i = 0; i !== a.length; i++) {
                a[i] = value;
            }
        }
        static copyOf(original, newLength) {
            return original.slice(0, newLength);
        }
        static copyOfUint8Array(original, newLength) {
            if (original.length <= newLength) {
                const newArray = new Uint8Array(newLength);
                newArray.set(original);
                return newArray;
            }
            return original.slice(0, newLength);
        }
        static copyOfRange(original, from, to) {
            const newLength = to - from;
            const copy = new Int32Array(newLength);
            System.arraycopy(original, from, copy, 0, newLength);
            return copy;
        }
        /*
        * Returns the index of of the element in a sorted array or (-n-1) where n is the insertion point
        * for the new element.
        * Parameters:
        *     ar - A sorted array
        *     el - An element to search for
        *     comparator - A comparator function. The function takes two arguments: (a, b) and returns:
        *        a negative number  if a is less than b;
        *        0 if a is equal to b;
        *        a positive number of a is greater than b.
        * The array may contain duplicate elements. If there are more than one equal elements in the array,
        * the returned value can be the index of any one of the equal elements.
        *
        * http://jsfiddle.net/aryzhov/pkfst550/
        */
        static binarySearch(ar, el, comparator) {
            if (undefined === comparator) {
                comparator = Arrays.numberComparator;
            }
            let m = 0;
            let n = ar.length - 1;
            while (m <= n) {
                const k = (n + m) >> 1;
                const cmp = comparator(el, ar[k]);
                if (cmp > 0) {
                    m = k + 1;
                }
                else if (cmp < 0) {
                    n = k - 1;
                }
                else {
                    return k;
                }
            }
            return -m - 1;
        }
        static numberComparator(a, b) {
            return a - b;
        }
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * <p>A simple, fast array of bits, represented compactly by an array of ints internally.</p>
     *
     * @author Sean Owen
     */
    class BitArray /*implements Cloneable*/ {
        // public constructor() {
        //   this.size = 0
        //   this.bits = new Int32Array(1)
        // }
        // public constructor(size?: number /*int*/) {
        //   if (undefined === size) {
        //     this.size = 0
        //   } else {
        //     this.size = size
        //   }
        //   this.bits = this.makeArray(size)
        // }
        // For testing only
        constructor(size /*int*/, bits) {
            if (undefined === size) {
                this.size = 0;
                this.bits = new Int32Array(1);
            }
            else {
                this.size = size;
                if (undefined === bits || null === bits) {
                    this.bits = BitArray.makeArray(size);
                }
                else {
                    this.bits = bits;
                }
            }
        }
        getSize() {
            return this.size;
        }
        getSizeInBytes() {
            return Math.floor((this.size + 7) / 8);
        }
        ensureCapacity(size /*int*/) {
            if (size > this.bits.length * 32) {
                const newBits = BitArray.makeArray(size);
                System.arraycopy(this.bits, 0, newBits, 0, this.bits.length);
                this.bits = newBits;
            }
        }
        /**
         * @param i bit to get
         * @return true iff bit i is set
         */
        get(i /*int*/) {
            return (this.bits[Math.floor(i / 32)] & (1 << (i & 0x1F))) !== 0;
        }
        /**
         * Sets bit i.
         *
         * @param i bit to set
         */
        set(i /*int*/) {
            this.bits[Math.floor(i / 32)] |= 1 << (i & 0x1F);
        }
        /**
         * Flips bit i.
         *
         * @param i bit to set
         */
        flip(i /*int*/) {
            this.bits[Math.floor(i / 32)] ^= 1 << (i & 0x1F);
        }
        /**
         * @param from first bit to check
         * @return index of first bit that is set, starting from the given index, or size if none are set
         *  at or beyond this given index
         * @see #getNextUnset(int)
         */
        getNextSet(from /*int*/) {
            const size = this.size;
            if (from >= size) {
                return size;
            }
            const bits = this.bits;
            let bitsOffset = Math.floor(from / 32);
            let currentBits = bits[bitsOffset];
            // mask off lesser bits first
            currentBits &= ~((1 << (from & 0x1F)) - 1);
            const length = bits.length;
            while (currentBits === 0) {
                if (++bitsOffset === length) {
                    return size;
                }
                currentBits = bits[bitsOffset];
            }
            const result = (bitsOffset * 32) + Integer.numberOfTrailingZeros(currentBits);
            return result > size ? size : result;
        }
        /**
         * @param from index to start looking for unset bit
         * @return index of next unset bit, or {@code size} if none are unset until the end
         * @see #getNextSet(int)
         */
        getNextUnset(from /*int*/) {
            const size = this.size;
            if (from >= size) {
                return size;
            }
            const bits = this.bits;
            let bitsOffset = Math.floor(from / 32);
            let currentBits = ~bits[bitsOffset];
            // mask off lesser bits first
            currentBits &= ~((1 << (from & 0x1F)) - 1);
            const length = bits.length;
            while (currentBits === 0) {
                if (++bitsOffset === length) {
                    return size;
                }
                currentBits = ~bits[bitsOffset];
            }
            const result = (bitsOffset * 32) + Integer.numberOfTrailingZeros(currentBits);
            return result > size ? size : result;
        }
        /**
         * Sets a block of 32 bits, starting at bit i.
         *
         * @param i first bit to set
         * @param newBits the new value of the next 32 bits. Note again that the least-significant bit
         * corresponds to bit i, the next-least-significant to i+1, and so on.
         */
        setBulk(i /*int*/, newBits /*int*/) {
            this.bits[Math.floor(i / 32)] = newBits;
        }
        /**
         * Sets a range of bits.
         *
         * @param start start of range, inclusive.
         * @param end end of range, exclusive
         */
        setRange(start /*int*/, end /*int*/) {
            if (end < start || start < 0 || end > this.size) {
                throw new IllegalArgumentException();
            }
            if (end === start) {
                return;
            }
            end--; // will be easier to treat this as the last actually set bit -- inclusive
            const firstInt = Math.floor(start / 32);
            const lastInt = Math.floor(end / 32);
            const bits = this.bits;
            for (let i = firstInt; i <= lastInt; i++) {
                const firstBit = i > firstInt ? 0 : start & 0x1F;
                const lastBit = i < lastInt ? 31 : end & 0x1F;
                // Ones from firstBit to lastBit, inclusive
                const mask = (2 << lastBit) - (1 << firstBit);
                bits[i] |= mask;
            }
        }
        /**
         * Clears all bits (sets to false).
         */
        clear() {
            const max = this.bits.length;
            const bits = this.bits;
            for (let i = 0; i < max; i++) {
                bits[i] = 0;
            }
        }
        /**
         * Efficient method to check if a range of bits is set, or not set.
         *
         * @param start start of range, inclusive.
         * @param end end of range, exclusive
         * @param value if true, checks that bits in range are set, otherwise checks that they are not set
         * @return true iff all bits are set or not set in range, according to value argument
         * @throws IllegalArgumentException if end is less than start or the range is not contained in the array
         */
        isRange(start /*int*/, end /*int*/, value) {
            if (end < start || start < 0 || end > this.size) {
                throw new IllegalArgumentException();
            }
            if (end === start) {
                return true; // empty range matches
            }
            end--; // will be easier to treat this as the last actually set bit -- inclusive
            const firstInt = Math.floor(start / 32);
            const lastInt = Math.floor(end / 32);
            const bits = this.bits;
            for (let i = firstInt; i <= lastInt; i++) {
                const firstBit = i > firstInt ? 0 : start & 0x1F;
                const lastBit = i < lastInt ? 31 : end & 0x1F;
                // Ones from firstBit to lastBit, inclusive
                const mask = (2 << lastBit) - (1 << firstBit) & 0xFFFFFFFF;
                // TYPESCRIPTPORT: & 0xFFFFFFFF added to discard anything after 32 bits, as ES has 53 bits
                // Return false if we're looking for 1s and the masked bits[i] isn't all 1s (is: that,
                // equals the mask, or we're looking for 0s and the masked portion is not all 0s
                if ((bits[i] & mask) !== (value ? mask : 0)) {
                    return false;
                }
            }
            return true;
        }
        appendBit(bit) {
            this.ensureCapacity(this.size + 1);
            if (bit) {
                this.bits[Math.floor(this.size / 32)] |= 1 << (this.size & 0x1F);
            }
            this.size++;
        }
        /**
         * Appends the least-significant bits, from value, in order from most-significant to
         * least-significant. For example, appending 6 bits from 0x000001E will append the bits
         * 0, 1, 1, 1, 1, 0 in that order.
         *
         * @param value {@code int} containing bits to append
         * @param numBits bits from value to append
         */
        appendBits(value /*int*/, numBits /*int*/) {
            if (numBits < 0 || numBits > 32) {
                throw new IllegalArgumentException('Num bits must be between 0 and 32');
            }
            this.ensureCapacity(this.size + numBits);
            const appendBit = this.appendBit;
            for (let numBitsLeft = numBits; numBitsLeft > 0; numBitsLeft--) {
                this.appendBit(((value >> (numBitsLeft - 1)) & 0x01) === 1);
            }
        }
        appendBitArray(other) {
            const otherSize = other.size;
            this.ensureCapacity(this.size + otherSize);
            const appendBit = this.appendBit;
            for (let i = 0; i < otherSize; i++) {
                this.appendBit(other.get(i));
            }
        }
        xor(other) {
            if (this.size !== other.size) {
                throw new IllegalArgumentException('Sizes don\'t match');
            }
            const bits = this.bits;
            for (let i = 0, length = bits.length; i < length; i++) {
                // The last int could be incomplete (i.e. not have 32 bits in
                // it) but there is no problem since 0 XOR 0 == 0.
                bits[i] ^= other.bits[i];
            }
        }
        /**
         *
         * @param bitOffset first bit to start writing
         * @param array array to write into. Bytes are written most-significant byte first. This is the opposite
         *  of the internal representation, which is exposed by {@link #getBitArray()}
         * @param offset position in array to start writing
         * @param numBytes how many bytes to write
         */
        toBytes(bitOffset /*int*/, array, offset /*int*/, numBytes /*int*/) {
            for (let i = 0; i < numBytes; i++) {
                let theByte = 0;
                for (let j = 0; j < 8; j++) {
                    if (this.get(bitOffset)) {
                        theByte |= 1 << (7 - j);
                    }
                    bitOffset++;
                }
                array[offset + i] = /*(byte)*/ theByte;
            }
        }
        /**
         * @return underlying array of ints. The first element holds the first 32 bits, and the least
         *         significant bit is bit 0.
         */
        getBitArray() {
            return this.bits;
        }
        /**
         * Reverses all bits in the array.
         */
        reverse() {
            const newBits = new Int32Array(this.bits.length);
            // reverse all int's first
            const len = Math.floor((this.size - 1) / 32);
            const oldBitsLen = len + 1;
            const bits = this.bits;
            for (let i = 0; i < oldBitsLen; i++) {
                let x = bits[i];
                x = ((x >> 1) & 0x55555555) | ((x & 0x55555555) << 1);
                x = ((x >> 2) & 0x33333333) | ((x & 0x33333333) << 2);
                x = ((x >> 4) & 0x0f0f0f0f) | ((x & 0x0f0f0f0f) << 4);
                x = ((x >> 8) & 0x00ff00ff) | ((x & 0x00ff00ff) << 8);
                x = ((x >> 16) & 0x0000ffff) | ((x & 0x0000ffff) << 16);
                newBits[len - i] = /*(int)*/ x;
            }
            // now correct the int's if the bit size isn't a multiple of 32
            if (this.size !== oldBitsLen * 32) {
                const leftOffset = oldBitsLen * 32 - this.size;
                let currentInt = newBits[0] >>> leftOffset;
                for (let i = 1; i < oldBitsLen; i++) {
                    const nextInt = newBits[i];
                    currentInt |= nextInt << (32 - leftOffset);
                    newBits[i - 1] = currentInt;
                    currentInt = nextInt >>> leftOffset;
                }
                newBits[oldBitsLen - 1] = currentInt;
            }
            this.bits = newBits;
        }
        static makeArray(size /*int*/) {
            return new Int32Array(Math.floor((size + 31) / 32));
        }
        /*@Override*/
        equals(o) {
            if (!(o instanceof BitArray)) {
                return false;
            }
            const other = o;
            return this.size === other.size && Arrays.equals(this.bits, other.bits);
        }
        /*@Override*/
        hashCode() {
            return 31 * this.size + Arrays.hashCode(this.bits);
        }
        /*@Override*/
        toString() {
            let result = '';
            for (let i = 0, size = this.size; i < size; i++) {
                if ((i & 0x07) === 0) {
                    result += ' ';
                }
                result += this.get(i) ? 'X' : '.';
            }
            return result;
        }
        /*@Override*/
        clone() {
            return new BitArray(this.size, this.bits.slice());
        }
    }

    /*
     * Copyright 2009 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /*namespace com.google.zxing {*/
    /**
     * Encapsulates a type of hint that a caller may pass to a barcode reader to help it
     * more quickly or accurately decode it. It is up to implementations to decide what,
     * if anything, to do with the information that is supplied.
     *
     * @author Sean Owen
     * @author dswitkin@google.com (Daniel Switkin)
     * @see Reader#decode(BinaryBitmap,java.util.Map)
     */
    var DecodeHintType;
    (function (DecodeHintType) {
        /**
         * Unspecified, application-specific hint. Maps to an unspecified {@link Object}.
         */
        DecodeHintType[DecodeHintType["OTHER"] = 0] = "OTHER"; /*(Object.class)*/
        /**
         * Image is a pure monochrome image of a barcode. Doesn't matter what it maps to;
         * use {@link Boolean#TRUE}.
         */
        DecodeHintType[DecodeHintType["PURE_BARCODE"] = 1] = "PURE_BARCODE"; /*(Void.class)*/
        /**
         * Image is known to be of one of a few possible formats.
         * Maps to a {@link List} of {@link BarcodeFormat}s.
         */
        DecodeHintType[DecodeHintType["POSSIBLE_FORMATS"] = 2] = "POSSIBLE_FORMATS"; /*(List.class)*/
        /**
         * Spend more time to try to find a barcode; optimize for accuracy, not speed.
         * Doesn't matter what it maps to; use {@link Boolean#TRUE}.
         */
        DecodeHintType[DecodeHintType["TRY_HARDER"] = 3] = "TRY_HARDER"; /*(Void.class)*/
        /**
         * Specifies what character encoding to use when decoding, where applicable (type String)
         */
        DecodeHintType[DecodeHintType["CHARACTER_SET"] = 4] = "CHARACTER_SET"; /*(String.class)*/
        /**
         * Allowed lengths of encoded data -- reject anything else. Maps to an {@code Int32Array}.
         */
        DecodeHintType[DecodeHintType["ALLOWED_LENGTHS"] = 5] = "ALLOWED_LENGTHS"; /*(Int32Array.class)*/
        /**
         * Assume Code 39 codes employ a check digit. Doesn't matter what it maps to;
         * use {@link Boolean#TRUE}.
         */
        DecodeHintType[DecodeHintType["ASSUME_CODE_39_CHECK_DIGIT"] = 6] = "ASSUME_CODE_39_CHECK_DIGIT"; /*(Void.class)*/
        /**
         * Assume the barcode is being processed as a GS1 barcode, and modify behavior as needed.
         * For example this affects FNC1 handling for Code 128 (aka GS1-128). Doesn't matter what it maps to;
         * use {@link Boolean#TRUE}.
         */
        DecodeHintType[DecodeHintType["ASSUME_GS1"] = 7] = "ASSUME_GS1"; /*(Void.class)*/
        /**
         * If true, return the start and end digits in a Codabar barcode instead of stripping them. They
         * are alpha, whereas the rest are numeric. By default, they are stripped, but this causes them
         * to not be. Doesn't matter what it maps to; use {@link Boolean#TRUE}.
         */
        DecodeHintType[DecodeHintType["RETURN_CODABAR_START_END"] = 8] = "RETURN_CODABAR_START_END"; /*(Void.class)*/
        /**
         * The caller needs to be notified via callback when a possible {@link ResultPoint}
         * is found. Maps to a {@link ResultPointCallback}.
         */
        DecodeHintType[DecodeHintType["NEED_RESULT_POINT_CALLBACK"] = 9] = "NEED_RESULT_POINT_CALLBACK"; /*(ResultPointCallback.class)*/
        /**
         * Allowed extension lengths for EAN or UPC barcodes. Other formats will ignore this.
         * Maps to an {@code Int32Array} of the allowed extension lengths, for example [2], [5], or [2, 5].
         * If it is optional to have an extension, do not set this hint. If this is set,
         * and a UPC or EAN barcode is found but an extension is not, then no result will be returned
         * at all.
         */
        DecodeHintType[DecodeHintType["ALLOWED_EAN_EXTENSIONS"] = 10] = "ALLOWED_EAN_EXTENSIONS"; /*(Int32Array.class)*/
        // End of enumeration values.
        /**
         * Data type the hint is expecting.
         * Among the possible values the {@link Void} stands out as being used for
         * hints that do not expect a value to be supplied (flag hints). Such hints
         * will possibly have their value ignored, or replaced by a
         * {@link Boolean#TRUE}. Hint suppliers should probably use
         * {@link Boolean#TRUE} as directed by the actual hint documentation.
         */
        // private valueType: Class<?>
        // DecodeHintType(valueType: Class<?>) {
        //   this.valueType = valueType
        // }
        // public getValueType(): Class<?> {
        //   return valueType
        // }
    })(DecodeHintType || (DecodeHintType = {}));
    var DecodeHintType$1 = DecodeHintType;

    /**
     * Custom Error class of type Exception.
     */
    class FormatException extends Exception {
        static getFormatInstance() {
            return new FormatException();
        }
    }

    /*
     * Copyright 2008 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /*import java.util.HashMap;*/
    /*import java.util.Map;*/
    var CharacterSetValueIdentifiers;
    (function (CharacterSetValueIdentifiers) {
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp437"] = 0] = "Cp437";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_1"] = 1] = "ISO8859_1";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_2"] = 2] = "ISO8859_2";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_3"] = 3] = "ISO8859_3";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_4"] = 4] = "ISO8859_4";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_5"] = 5] = "ISO8859_5";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_6"] = 6] = "ISO8859_6";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_7"] = 7] = "ISO8859_7";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_8"] = 8] = "ISO8859_8";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_9"] = 9] = "ISO8859_9";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_10"] = 10] = "ISO8859_10";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_11"] = 11] = "ISO8859_11";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_13"] = 12] = "ISO8859_13";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_14"] = 13] = "ISO8859_14";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_15"] = 14] = "ISO8859_15";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_16"] = 15] = "ISO8859_16";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["SJIS"] = 16] = "SJIS";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp1250"] = 17] = "Cp1250";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp1251"] = 18] = "Cp1251";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp1252"] = 19] = "Cp1252";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp1256"] = 20] = "Cp1256";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["UnicodeBigUnmarked"] = 21] = "UnicodeBigUnmarked";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["UTF8"] = 22] = "UTF8";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ASCII"] = 23] = "ASCII";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Big5"] = 24] = "Big5";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["GB18030"] = 25] = "GB18030";
        CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["EUC_KR"] = 26] = "EUC_KR";
    })(CharacterSetValueIdentifiers || (CharacterSetValueIdentifiers = {}));
    /**
     * Encapsulates a Character Set ECI, according to "Extended Channel Interpretations" 5.3.1.1
     * of ISO 18004.
     *
     * @author Sean Owen
     */
    class CharacterSetECI {
        constructor(valueIdentifier, valuesParam, name, ...otherEncodingNames) {
            this.valueIdentifier = valueIdentifier;
            this.name = name;
            if (typeof valuesParam === 'number') {
                this.values = Int32Array.from([valuesParam]);
            }
            else {
                this.values = valuesParam;
            }
            this.otherEncodingNames = otherEncodingNames;
            CharacterSetECI.VALUE_IDENTIFIER_TO_ECI.set(valueIdentifier, this);
            CharacterSetECI.NAME_TO_ECI.set(name, this);
            const values = this.values;
            for (let i = 0, length = values.length; i !== length; i++) {
                const v = values[i];
                CharacterSetECI.VALUES_TO_ECI.set(v, this);
            }
            for (const otherName of otherEncodingNames) {
                CharacterSetECI.NAME_TO_ECI.set(otherName, this);
            }
        }
        // CharacterSetECI(value: number /*int*/) {
        //   this(new Int32Array {value})
        // }
        // CharacterSetECI(value: number /*int*/, String... otherEncodingNames) {
        //   this.values = new Int32Array {value}
        //   this.otherEncodingNames = otherEncodingNames
        // }
        // CharacterSetECI(values: Int32Array, String... otherEncodingNames) {
        //   this.values = values
        //   this.otherEncodingNames = otherEncodingNames
        // }
        getValueIdentifier() {
            return this.valueIdentifier;
        }
        getName() {
            return this.name;
        }
        getValue() {
            return this.values[0];
        }
        /**
         * @param value character set ECI value
         * @return {@code CharacterSetECI} representing ECI of given value, or null if it is legal but
         *   unsupported
         * @throws FormatException if ECI value is invalid
         */
        static getCharacterSetECIByValue(value /*int*/) {
            if (value < 0 || value >= 900) {
                throw new FormatException('incorect value');
            }
            const characterSet = CharacterSetECI.VALUES_TO_ECI.get(value);
            if (undefined === characterSet) {
                throw new FormatException('incorect value');
            }
            return characterSet;
        }
        /**
         * @param name character set ECI encoding name
         * @return CharacterSetECI representing ECI for character encoding, or null if it is legal
         *   but unsupported
         */
        static getCharacterSetECIByName(name) {
            const characterSet = CharacterSetECI.NAME_TO_ECI.get(name);
            if (undefined === characterSet) {
                throw new FormatException('incorect value');
            }
            return characterSet;
        }
        equals(o) {
            if (!(o instanceof CharacterSetECI)) {
                return false;
            }
            const other = o;
            return this.getName() === other.getName();
        }
    }
    CharacterSetECI.VALUE_IDENTIFIER_TO_ECI = new Map();
    CharacterSetECI.VALUES_TO_ECI = new Map();
    CharacterSetECI.NAME_TO_ECI = new Map();
    // Enum name is a Java encoding valid for java.lang and java.io
    // TYPESCRIPTPORT: changed the main label for ISO as the TextEncoder did not recognized them in the form from java
    // (eg ISO8859_1 must be ISO88591 or ISO8859-1 or ISO-8859-1)
    // later on: well, except 16 wich does not work with ISO885916 so used ISO-8859-1 form for default
    CharacterSetECI.Cp437 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp437, Int32Array.from([0, 2]), 'Cp437');
    CharacterSetECI.ISO8859_1 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_1, Int32Array.from([1, 3]), 'ISO-8859-1', 'ISO88591', 'ISO8859_1');
    CharacterSetECI.ISO8859_2 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_2, 4, 'ISO-8859-2', 'ISO88592', 'ISO8859_2');
    CharacterSetECI.ISO8859_3 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_3, 5, 'ISO-8859-3', 'ISO88593', 'ISO8859_3');
    CharacterSetECI.ISO8859_4 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_4, 6, 'ISO-8859-4', 'ISO88594', 'ISO8859_4');
    CharacterSetECI.ISO8859_5 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_5, 7, 'ISO-8859-5', 'ISO88595', 'ISO8859_5');
    CharacterSetECI.ISO8859_6 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_6, 8, 'ISO-8859-6', 'ISO88596', 'ISO8859_6');
    CharacterSetECI.ISO8859_7 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_7, 9, 'ISO-8859-7', 'ISO88597', 'ISO8859_7');
    CharacterSetECI.ISO8859_8 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_8, 10, 'ISO-8859-8', 'ISO88598', 'ISO8859_8');
    CharacterSetECI.ISO8859_9 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_9, 11, 'ISO-8859-9', 'ISO88599', 'ISO8859_9');
    CharacterSetECI.ISO8859_10 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_10, 12, 'ISO-8859-10', 'ISO885910', 'ISO8859_10');
    CharacterSetECI.ISO8859_11 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_11, 13, 'ISO-8859-11', 'ISO885911', 'ISO8859_11');
    CharacterSetECI.ISO8859_13 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_13, 15, 'ISO-8859-13', 'ISO885913', 'ISO8859_13');
    CharacterSetECI.ISO8859_14 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_14, 16, 'ISO-8859-14', 'ISO885914', 'ISO8859_14');
    CharacterSetECI.ISO8859_15 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_15, 17, 'ISO-8859-15', 'ISO885915', 'ISO8859_15');
    CharacterSetECI.ISO8859_16 = new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_16, 18, 'ISO-8859-16', 'ISO885916', 'ISO8859_16');
    CharacterSetECI.SJIS = new CharacterSetECI(CharacterSetValueIdentifiers.SJIS, 20, 'SJIS', 'Shift_JIS');
    CharacterSetECI.Cp1250 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp1250, 21, 'Cp1250', 'windows-1250');
    CharacterSetECI.Cp1251 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp1251, 22, 'Cp1251', 'windows-1251');
    CharacterSetECI.Cp1252 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp1252, 23, 'Cp1252', 'windows-1252');
    CharacterSetECI.Cp1256 = new CharacterSetECI(CharacterSetValueIdentifiers.Cp1256, 24, 'Cp1256', 'windows-1256');
    CharacterSetECI.UnicodeBigUnmarked = new CharacterSetECI(CharacterSetValueIdentifiers.UnicodeBigUnmarked, 25, 'UnicodeBigUnmarked', 'UTF-16BE', 'UnicodeBig');
    CharacterSetECI.UTF8 = new CharacterSetECI(CharacterSetValueIdentifiers.UTF8, 26, 'UTF8', 'UTF-8');
    CharacterSetECI.ASCII = new CharacterSetECI(CharacterSetValueIdentifiers.ASCII, Int32Array.from([27, 170]), 'ASCII', 'US-ASCII');
    CharacterSetECI.Big5 = new CharacterSetECI(CharacterSetValueIdentifiers.Big5, 28, 'Big5');
    CharacterSetECI.GB18030 = new CharacterSetECI(CharacterSetValueIdentifiers.GB18030, 29, 'GB18030', 'GB2312', 'EUC_CN', 'GBK');
    CharacterSetECI.EUC_KR = new CharacterSetECI(CharacterSetValueIdentifiers.EUC_KR, 30, 'EUC_KR', 'EUC-KR');

    /**
     * Custom Error class of type Exception.
     */
    class UnsupportedOperationException extends Exception {
    }

    /**
     * Responsible for en/decoding strings.
     */
    class StringEncoding {
        /**
         * Decodes some Uint8Array to a string format.
         */
        static decode(bytes, encoding) {
            const encodingName = this.encodingName(encoding);
            if (this.customDecoder) {
                return this.customDecoder(bytes, encodingName);
            }
            // Increases browser support.
            if (typeof TextDecoder === 'undefined' || this.shouldDecodeOnFallback(encodingName)) {
                return this.decodeFallback(bytes, encodingName);
            }
            return new TextDecoder(encodingName).decode(bytes);
        }
        /**
         * Checks if the decoding method should use the fallback for decoding
         * once Node TextDecoder doesn't support all encoding formats.
         *
         * @param encodingName
         */
        static shouldDecodeOnFallback(encodingName) {
            return !StringEncoding.isBrowser() && encodingName === 'ISO-8859-1';
        }
        /**
         * Encodes some string into a Uint8Array.
         */
        static encode(s, encoding) {
            const encodingName = this.encodingName(encoding);
            if (this.customEncoder) {
                return this.customEncoder(s, encodingName);
            }
            // Increases browser support.
            if (typeof TextEncoder === 'undefined') {
                return this.encodeFallback(s);
            }
            // TextEncoder only encodes to UTF8 by default as specified by encoding.spec.whatwg.org
            return new TextEncoder().encode(s);
        }
        static isBrowser() {
            return (typeof window !== 'undefined' && {}.toString.call(window) === '[object Window]');
        }
        /**
         * Returns the string value from some encoding character set.
         */
        static encodingName(encoding) {
            return typeof encoding === 'string'
                ? encoding
                : encoding.getName();
        }
        /**
         * Returns character set from some encoding character set.
         */
        static encodingCharacterSet(encoding) {
            if (encoding instanceof CharacterSetECI) {
                return encoding;
            }
            return CharacterSetECI.getCharacterSetECIByName(encoding);
        }
        /**
         * Runs a fallback for the native decoding funcion.
         */
        static decodeFallback(bytes, encoding) {
            const characterSet = this.encodingCharacterSet(encoding);
            if (StringEncoding.isDecodeFallbackSupported(characterSet)) {
                let s = '';
                for (let i = 0, length = bytes.length; i < length; i++) {
                    let h = bytes[i].toString(16);
                    if (h.length < 2) {
                        h = '0' + h;
                    }
                    s += '%' + h;
                }
                return decodeURIComponent(s);
            }
            if (characterSet.equals(CharacterSetECI.UnicodeBigUnmarked)) {
                return String.fromCharCode.apply(null, new Uint16Array(bytes.buffer));
            }
            throw new UnsupportedOperationException(`Encoding ${this.encodingName(encoding)} not supported by fallback.`);
        }
        static isDecodeFallbackSupported(characterSet) {
            return characterSet.equals(CharacterSetECI.UTF8) ||
                characterSet.equals(CharacterSetECI.ISO8859_1) ||
                characterSet.equals(CharacterSetECI.ASCII);
        }
        /**
         * Runs a fallback for the native encoding funcion.
         *
         * @see https://stackoverflow.com/a/17192845/4367683
         */
        static encodeFallback(s) {
            const encodedURIstring = btoa(unescape(encodeURIComponent(s)));
            const charList = encodedURIstring.split('');
            const uintArray = [];
            for (let i = 0; i < charList.length; i++) {
                uintArray.push(charList[i].charCodeAt(0));
            }
            return new Uint8Array(uintArray);
        }
    }

    /*
     * Copyright (C) 2010 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Common string-related functions.
     *
     * @author Sean Owen
     * @author Alex Dupre
     */
    class StringUtils {
        // SHIFT_JIS.equalsIgnoreCase(PLATFORM_DEFAULT_ENCODING) ||
        // EUC_JP.equalsIgnoreCase(PLATFORM_DEFAULT_ENCODING);
        static castAsNonUtf8Char(code, encoding = null) {
            // ISO 8859-1 is the Java default as UTF-8 is JavaScripts
            // you can see this method as a Java version of String.fromCharCode
            const e = encoding ? encoding.getName() : this.ISO88591;
            // use passed format (fromCharCode will return UTF8 encoding)
            return StringEncoding.decode(new Uint8Array([code]), e);
        }
        /**
         * @param bytes bytes encoding a string, whose encoding should be guessed
         * @param hints decode hints if applicable
         * @return name of guessed encoding; at the moment will only guess one of:
         *  {@link #SHIFT_JIS}, {@link #UTF8}, {@link #ISO88591}, or the platform
         *  default encoding if none of these can possibly be correct
         */
        static guessEncoding(bytes, hints) {
            if (hints !== null && hints !== undefined && undefined !== hints.get(DecodeHintType$1.CHARACTER_SET)) {
                return hints.get(DecodeHintType$1.CHARACTER_SET).toString();
            }
            // For now, merely tries to distinguish ISO-8859-1, UTF-8 and Shift_JIS,
            // which should be by far the most common encodings.
            const length = bytes.length;
            let canBeISO88591 = true;
            let canBeShiftJIS = true;
            let canBeUTF8 = true;
            let utf8BytesLeft = 0;
            // int utf8LowChars = 0
            let utf2BytesChars = 0;
            let utf3BytesChars = 0;
            let utf4BytesChars = 0;
            let sjisBytesLeft = 0;
            // int sjisLowChars = 0
            let sjisKatakanaChars = 0;
            // int sjisDoubleBytesChars = 0
            let sjisCurKatakanaWordLength = 0;
            let sjisCurDoubleBytesWordLength = 0;
            let sjisMaxKatakanaWordLength = 0;
            let sjisMaxDoubleBytesWordLength = 0;
            // int isoLowChars = 0
            // int isoHighChars = 0
            let isoHighOther = 0;
            const utf8bom = bytes.length > 3 &&
                bytes[0] === /*(byte) */ 0xEF &&
                bytes[1] === /*(byte) */ 0xBB &&
                bytes[2] === /*(byte) */ 0xBF;
            for (let i = 0; i < length && (canBeISO88591 || canBeShiftJIS || canBeUTF8); i++) {
                const value = bytes[i] & 0xFF;
                // UTF-8 stuff
                if (canBeUTF8) {
                    if (utf8BytesLeft > 0) {
                        if ((value & 0x80) === 0) {
                            canBeUTF8 = false;
                        }
                        else {
                            utf8BytesLeft--;
                        }
                    }
                    else if ((value & 0x80) !== 0) {
                        if ((value & 0x40) === 0) {
                            canBeUTF8 = false;
                        }
                        else {
                            utf8BytesLeft++;
                            if ((value & 0x20) === 0) {
                                utf2BytesChars++;
                            }
                            else {
                                utf8BytesLeft++;
                                if ((value & 0x10) === 0) {
                                    utf3BytesChars++;
                                }
                                else {
                                    utf8BytesLeft++;
                                    if ((value & 0x08) === 0) {
                                        utf4BytesChars++;
                                    }
                                    else {
                                        canBeUTF8 = false;
                                    }
                                }
                            }
                        }
                    } // else {
                    // utf8LowChars++
                    // }
                }
                // ISO-8859-1 stuff
                if (canBeISO88591) {
                    if (value > 0x7F && value < 0xA0) {
                        canBeISO88591 = false;
                    }
                    else if (value > 0x9F) {
                        if (value < 0xC0 || value === 0xD7 || value === 0xF7) {
                            isoHighOther++;
                        } // else {
                        // isoHighChars++
                        // }
                    } // else {
                    // isoLowChars++
                    // }
                }
                // Shift_JIS stuff
                if (canBeShiftJIS) {
                    if (sjisBytesLeft > 0) {
                        if (value < 0x40 || value === 0x7F || value > 0xFC) {
                            canBeShiftJIS = false;
                        }
                        else {
                            sjisBytesLeft--;
                        }
                    }
                    else if (value === 0x80 || value === 0xA0 || value > 0xEF) {
                        canBeShiftJIS = false;
                    }
                    else if (value > 0xA0 && value < 0xE0) {
                        sjisKatakanaChars++;
                        sjisCurDoubleBytesWordLength = 0;
                        sjisCurKatakanaWordLength++;
                        if (sjisCurKatakanaWordLength > sjisMaxKatakanaWordLength) {
                            sjisMaxKatakanaWordLength = sjisCurKatakanaWordLength;
                        }
                    }
                    else if (value > 0x7F) {
                        sjisBytesLeft++;
                        // sjisDoubleBytesChars++
                        sjisCurKatakanaWordLength = 0;
                        sjisCurDoubleBytesWordLength++;
                        if (sjisCurDoubleBytesWordLength > sjisMaxDoubleBytesWordLength) {
                            sjisMaxDoubleBytesWordLength = sjisCurDoubleBytesWordLength;
                        }
                    }
                    else {
                        // sjisLowChars++
                        sjisCurKatakanaWordLength = 0;
                        sjisCurDoubleBytesWordLength = 0;
                    }
                }
            }
            if (canBeUTF8 && utf8BytesLeft > 0) {
                canBeUTF8 = false;
            }
            if (canBeShiftJIS && sjisBytesLeft > 0) {
                canBeShiftJIS = false;
            }
            // Easy -- if there is BOM or at least 1 valid not-single byte character (and no evidence it can't be UTF-8), done
            if (canBeUTF8 && (utf8bom || utf2BytesChars + utf3BytesChars + utf4BytesChars > 0)) {
                return StringUtils.UTF8;
            }
            // Easy -- if assuming Shift_JIS or at least 3 valid consecutive not-ascii characters (and no evidence it can't be), done
            if (canBeShiftJIS && (StringUtils.ASSUME_SHIFT_JIS || sjisMaxKatakanaWordLength >= 3 || sjisMaxDoubleBytesWordLength >= 3)) {
                return StringUtils.SHIFT_JIS;
            }
            // Distinguishing Shift_JIS and ISO-8859-1 can be a little tough for short words. The crude heuristic is:
            // - If we saw
            //   - only two consecutive katakana chars in the whole text, or
            //   - at least 10% of bytes that could be "upper" not-alphanumeric Latin1,
            // - then we conclude Shift_JIS, else ISO-8859-1
            if (canBeISO88591 && canBeShiftJIS) {
                return (sjisMaxKatakanaWordLength === 2 && sjisKatakanaChars === 2) || isoHighOther * 10 >= length
                    ? StringUtils.SHIFT_JIS : StringUtils.ISO88591;
            }
            // Otherwise, try in order ISO-8859-1, Shift JIS, UTF-8 and fall back to default platform encoding
            if (canBeISO88591) {
                return StringUtils.ISO88591;
            }
            if (canBeShiftJIS) {
                return StringUtils.SHIFT_JIS;
            }
            if (canBeUTF8) {
                return StringUtils.UTF8;
            }
            // Otherwise, we take a wild guess with platform encoding
            return StringUtils.PLATFORM_DEFAULT_ENCODING;
        }
        /**
         *
         * @see https://stackoverflow.com/a/13439711/4367683
         *
         * @param append The new string to append.
         * @param args Argumets values to be formated.
         */
        static format(append, ...args) {
            let i = -1;
            function callback(exp, p0, p1, p2, p3, p4) {
                if (exp === '%%')
                    return '%';
                if (args[++i] === undefined)
                    return undefined;
                exp = p2 ? parseInt(p2.substr(1)) : undefined;
                let base = p3 ? parseInt(p3.substr(1)) : undefined;
                let val;
                switch (p4) {
                    case 's':
                        val = args[i];
                        break;
                    case 'c':
                        val = args[i][0];
                        break;
                    case 'f':
                        val = parseFloat(args[i]).toFixed(exp);
                        break;
                    case 'p':
                        val = parseFloat(args[i]).toPrecision(exp);
                        break;
                    case 'e':
                        val = parseFloat(args[i]).toExponential(exp);
                        break;
                    case 'x':
                        val = parseInt(args[i]).toString(base ? base : 16);
                        break;
                    case 'd':
                        val = parseFloat(parseInt(args[i], base ? base : 10).toPrecision(exp)).toFixed(0);
                        break;
                }
                val = typeof val === 'object' ? JSON.stringify(val) : (+val).toString(base);
                let size = parseInt(p1); /* padding size */
                let ch = p1 && (p1[0] + '') === '0' ? '0' : ' '; /* isnull? */
                while (val.length < size)
                    val = p0 !== undefined ? val + ch : ch + val; /* isminus? */
                return val;
            }
            let regex = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
            return append.replace(regex, callback);
        }
        /**
         *
         */
        static getBytes(str, encoding) {
            return StringEncoding.encode(str, encoding);
        }
        /**
         * Returns the charcode at the specified index or at index zero.
         */
        static getCharCode(str, index = 0) {
            return str.charCodeAt(index);
        }
        /**
         * Returns char for given charcode
         */
        static getCharAt(charCode) {
            return String.fromCharCode(charCode);
        }
    }
    StringUtils.SHIFT_JIS = CharacterSetECI.SJIS.getName(); // "SJIS"
    StringUtils.GB2312 = 'GB2312';
    StringUtils.ISO88591 = CharacterSetECI.ISO8859_1.getName(); // "ISO8859_1"
    StringUtils.EUC_JP = 'EUC_JP';
    StringUtils.UTF8 = CharacterSetECI.UTF8.getName(); // "UTF8"
    StringUtils.PLATFORM_DEFAULT_ENCODING = StringUtils.UTF8; // "UTF8"//Charset.defaultCharset().name()
    StringUtils.ASSUME_SHIFT_JIS = false;

    class StringBuilder {
        constructor(value = '') {
            this.value = value;
        }
        enableDecoding(encoding) {
            this.encoding = encoding;
            return this;
        }
        append(s) {
            if (typeof s === 'string') {
                this.value += s.toString();
            }
            else if (this.encoding) {
                // use passed format (fromCharCode will return UTF8 encoding)
                this.value += StringUtils.castAsNonUtf8Char(s, this.encoding);
            }
            else {
                // correctly converts from UTF-8, but not other encodings
                this.value += String.fromCharCode(s);
            }
            return this;
        }
        length() {
            return this.value.length;
        }
        charAt(n) {
            return this.value.charAt(n);
        }
        deleteCharAt(n) {
            this.value = this.value.substr(0, n) + this.value.substring(n + 1);
        }
        setCharAt(n, c) {
            this.value = this.value.substr(0, n) + c + this.value.substr(n + 1);
        }
        substring(start, end) {
            return this.value.substring(start, end);
        }
        /**
         * @note helper method for RSS Expanded
         */
        setLengthToZero() {
            this.value = "";
        }
        toString() {
            return this.value;
        }
        insert(n, c) {
            this.value = this.value.substr(0, n) + c + this.value.substr(n + c.length);
        }
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * <p>Represents a 2D matrix of bits. In function arguments below, and throughout the common
     * module, x is the column position, and y is the row position. The ordering is always x, y.
     * The origin is at the top-left.</p>
     *
     * <p>Internally the bits are represented in a 1-D array of 32-bit ints. However, each row begins
     * with a new int. This is done intentionally so that we can copy out a row into a BitArray very
     * efficiently.</p>
     *
     * <p>The ordering of bits is row-major. Within each int, the least significant bits are used first,
     * meaning they represent lower x values. This is compatible with BitArray's implementation.</p>
     *
     * @author Sean Owen
     * @author dswitkin@google.com (Daniel Switkin)
     */
    class BitMatrix /*implements Cloneable*/ {
        /**
         * Creates an empty square {@link BitMatrix}.
         *
         * @param dimension height and width
         */
        // public constructor(dimension: number /*int*/) {
        //   this(dimension, dimension)
        // }
        /**
         * Creates an empty {@link BitMatrix}.
         *
         * @param width bit matrix width
         * @param height bit matrix height
         */
        // public constructor(width: number /*int*/, height: number /*int*/) {
        //   if (width < 1 || height < 1) {
        //     throw new IllegalArgumentException("Both dimensions must be greater than 0")
        //   }
        //   this.width = width
        //   this.height = height
        //   this.rowSize = (width + 31) / 32
        //   bits = new int[rowSize * height];
        // }
        constructor(width /*int*/, height /*int*/, rowSize /*int*/, bits) {
            this.width = width;
            this.height = height;
            this.rowSize = rowSize;
            this.bits = bits;
            if (undefined === height || null === height) {
                height = width;
            }
            this.height = height;
            if (width < 1 || height < 1) {
                throw new IllegalArgumentException('Both dimensions must be greater than 0');
            }
            if (undefined === rowSize || null === rowSize) {
                rowSize = Math.floor((width + 31) / 32);
            }
            this.rowSize = rowSize;
            if (undefined === bits || null === bits) {
                this.bits = new Int32Array(this.rowSize * this.height);
            }
        }
        /**
         * Interprets a 2D array of booleans as a {@link BitMatrix}, where "true" means an "on" bit.
         *
         * @function parse
         * @param image bits of the image, as a row-major 2D array. Elements are arrays representing rows
         * @return {@link BitMatrix} representation of image
         */
        static parseFromBooleanArray(image) {
            const height = image.length;
            const width = image[0].length;
            const bits = new BitMatrix(width, height);
            for (let i = 0; i < height; i++) {
                const imageI = image[i];
                for (let j = 0; j < width; j++) {
                    if (imageI[j]) {
                        bits.set(j, i);
                    }
                }
            }
            return bits;
        }
        /**
         *
         * @function parse
         * @param stringRepresentation
         * @param setString
         * @param unsetString
         */
        static parseFromString(stringRepresentation, setString, unsetString) {
            if (stringRepresentation === null) {
                throw new IllegalArgumentException('stringRepresentation cannot be null');
            }
            const bits = new Array(stringRepresentation.length);
            let bitsPos = 0;
            let rowStartPos = 0;
            let rowLength = -1;
            let nRows = 0;
            let pos = 0;
            while (pos < stringRepresentation.length) {
                if (stringRepresentation.charAt(pos) === '\n' ||
                    stringRepresentation.charAt(pos) === '\r') {
                    if (bitsPos > rowStartPos) {
                        if (rowLength === -1) {
                            rowLength = bitsPos - rowStartPos;
                        }
                        else if (bitsPos - rowStartPos !== rowLength) {
                            throw new IllegalArgumentException('row lengths do not match');
                        }
                        rowStartPos = bitsPos;
                        nRows++;
                    }
                    pos++;
                }
                else if (stringRepresentation.substring(pos, pos + setString.length) === setString) {
                    pos += setString.length;
                    bits[bitsPos] = true;
                    bitsPos++;
                }
                else if (stringRepresentation.substring(pos, pos + unsetString.length) === unsetString) {
                    pos += unsetString.length;
                    bits[bitsPos] = false;
                    bitsPos++;
                }
                else {
                    throw new IllegalArgumentException('illegal character encountered: ' + stringRepresentation.substring(pos));
                }
            }
            // no EOL at end?
            if (bitsPos > rowStartPos) {
                if (rowLength === -1) {
                    rowLength = bitsPos - rowStartPos;
                }
                else if (bitsPos - rowStartPos !== rowLength) {
                    throw new IllegalArgumentException('row lengths do not match');
                }
                nRows++;
            }
            const matrix = new BitMatrix(rowLength, nRows);
            for (let i = 0; i < bitsPos; i++) {
                if (bits[i]) {
                    matrix.set(Math.floor(i % rowLength), Math.floor(i / rowLength));
                }
            }
            return matrix;
        }
        /**
         * <p>Gets the requested bit, where true means black.</p>
         *
         * @param x The horizontal component (i.e. which column)
         * @param y The vertical component (i.e. which row)
         * @return value of given bit in matrix
         */
        get(x /*int*/, y /*int*/) {
            const offset = y * this.rowSize + Math.floor(x / 32);
            return ((this.bits[offset] >>> (x & 0x1f)) & 1) !== 0;
        }
        /**
         * <p>Sets the given bit to true.</p>
         *
         * @param x The horizontal component (i.e. which column)
         * @param y The vertical component (i.e. which row)
         */
        set(x /*int*/, y /*int*/) {
            const offset = y * this.rowSize + Math.floor(x / 32);
            this.bits[offset] |= (1 << (x & 0x1f)) & 0xFFFFFFFF;
        }
        unset(x /*int*/, y /*int*/) {
            const offset = y * this.rowSize + Math.floor(x / 32);
            this.bits[offset] &= ~((1 << (x & 0x1f)) & 0xFFFFFFFF);
        }
        /**
         * <p>Flips the given bit.</p>
         *
         * @param x The horizontal component (i.e. which column)
         * @param y The vertical component (i.e. which row)
         */
        flip(x /*int*/, y /*int*/) {
            const offset = y * this.rowSize + Math.floor(x / 32);
            this.bits[offset] ^= ((1 << (x & 0x1f)) & 0xFFFFFFFF);
        }
        /**
         * Exclusive-or (XOR): Flip the bit in this {@code BitMatrix} if the corresponding
         * mask bit is set.
         *
         * @param mask XOR mask
         */
        xor(mask) {
            if (this.width !== mask.getWidth() || this.height !== mask.getHeight()
                || this.rowSize !== mask.getRowSize()) {
                throw new IllegalArgumentException('input matrix dimensions do not match');
            }
            const rowArray = new BitArray(Math.floor(this.width / 32) + 1);
            const rowSize = this.rowSize;
            const bits = this.bits;
            for (let y = 0, height = this.height; y < height; y++) {
                const offset = y * rowSize;
                const row = mask.getRow(y, rowArray).getBitArray();
                for (let x = 0; x < rowSize; x++) {
                    bits[offset + x] ^= row[x];
                }
            }
        }
        /**
         * Clears all bits (sets to false).
         */
        clear() {
            const bits = this.bits;
            const max = bits.length;
            for (let i = 0; i < max; i++) {
                bits[i] = 0;
            }
        }
        /**
         * <p>Sets a square region of the bit matrix to true.</p>
         *
         * @param left The horizontal position to begin at (inclusive)
         * @param top The vertical position to begin at (inclusive)
         * @param width The width of the region
         * @param height The height of the region
         */
        setRegion(left /*int*/, top /*int*/, width /*int*/, height /*int*/) {
            if (top < 0 || left < 0) {
                throw new IllegalArgumentException('Left and top must be nonnegative');
            }
            if (height < 1 || width < 1) {
                throw new IllegalArgumentException('Height and width must be at least 1');
            }
            const right = left + width;
            const bottom = top + height;
            if (bottom > this.height || right > this.width) {
                throw new IllegalArgumentException('The region must fit inside the matrix');
            }
            const rowSize = this.rowSize;
            const bits = this.bits;
            for (let y = top; y < bottom; y++) {
                const offset = y * rowSize;
                for (let x = left; x < right; x++) {
                    bits[offset + Math.floor(x / 32)] |= ((1 << (x & 0x1f)) & 0xFFFFFFFF);
                }
            }
        }
        /**
         * A fast method to retrieve one row of data from the matrix as a BitArray.
         *
         * @param y The row to retrieve
         * @param row An optional caller-allocated BitArray, will be allocated if null or too small
         * @return The resulting BitArray - this reference should always be used even when passing
         *         your own row
         */
        getRow(y /*int*/, row) {
            if (row === null || row === undefined || row.getSize() < this.width) {
                row = new BitArray(this.width);
            }
            else {
                row.clear();
            }
            const rowSize = this.rowSize;
            const bits = this.bits;
            const offset = y * rowSize;
            for (let x = 0; x < rowSize; x++) {
                row.setBulk(x * 32, bits[offset + x]);
            }
            return row;
        }
        /**
         * @param y row to set
         * @param row {@link BitArray} to copy from
         */
        setRow(y /*int*/, row) {
            System.arraycopy(row.getBitArray(), 0, this.bits, y * this.rowSize, this.rowSize);
        }
        /**
         * Modifies this {@code BitMatrix} to represent the same but rotated 180 degrees
         */
        rotate180() {
            const width = this.getWidth();
            const height = this.getHeight();
            let topRow = new BitArray(width);
            let bottomRow = new BitArray(width);
            for (let i = 0, length = Math.floor((height + 1) / 2); i < length; i++) {
                topRow = this.getRow(i, topRow);
                bottomRow = this.getRow(height - 1 - i, bottomRow);
                topRow.reverse();
                bottomRow.reverse();
                this.setRow(i, bottomRow);
                this.setRow(height - 1 - i, topRow);
            }
        }
        /**
         * This is useful in detecting the enclosing rectangle of a 'pure' barcode.
         *
         * @return {@code left,top,width,height} enclosing rectangle of all 1 bits, or null if it is all white
         */
        getEnclosingRectangle() {
            const width = this.width;
            const height = this.height;
            const rowSize = this.rowSize;
            const bits = this.bits;
            let left = width;
            let top = height;
            let right = -1;
            let bottom = -1;
            for (let y = 0; y < height; y++) {
                for (let x32 = 0; x32 < rowSize; x32++) {
                    const theBits = bits[y * rowSize + x32];
                    if (theBits !== 0) {
                        if (y < top) {
                            top = y;
                        }
                        if (y > bottom) {
                            bottom = y;
                        }
                        if (x32 * 32 < left) {
                            let bit = 0;
                            while (((theBits << (31 - bit)) & 0xFFFFFFFF) === 0) {
                                bit++;
                            }
                            if ((x32 * 32 + bit) < left) {
                                left = x32 * 32 + bit;
                            }
                        }
                        if (x32 * 32 + 31 > right) {
                            let bit = 31;
                            while ((theBits >>> bit) === 0) {
                                bit--;
                            }
                            if ((x32 * 32 + bit) > right) {
                                right = x32 * 32 + bit;
                            }
                        }
                    }
                }
            }
            if (right < left || bottom < top) {
                return null;
            }
            return Int32Array.from([left, top, right - left + 1, bottom - top + 1]);
        }
        /**
         * This is useful in detecting a corner of a 'pure' barcode.
         *
         * @return {@code x,y} coordinate of top-left-most 1 bit, or null if it is all white
         */
        getTopLeftOnBit() {
            const rowSize = this.rowSize;
            const bits = this.bits;
            let bitsOffset = 0;
            while (bitsOffset < bits.length && bits[bitsOffset] === 0) {
                bitsOffset++;
            }
            if (bitsOffset === bits.length) {
                return null;
            }
            const y = bitsOffset / rowSize;
            let x = (bitsOffset % rowSize) * 32;
            const theBits = bits[bitsOffset];
            let bit = 0;
            while (((theBits << (31 - bit)) & 0xFFFFFFFF) === 0) {
                bit++;
            }
            x += bit;
            return Int32Array.from([x, y]);
        }
        getBottomRightOnBit() {
            const rowSize = this.rowSize;
            const bits = this.bits;
            let bitsOffset = bits.length - 1;
            while (bitsOffset >= 0 && bits[bitsOffset] === 0) {
                bitsOffset--;
            }
            if (bitsOffset < 0) {
                return null;
            }
            const y = Math.floor(bitsOffset / rowSize);
            let x = Math.floor(bitsOffset % rowSize) * 32;
            const theBits = bits[bitsOffset];
            let bit = 31;
            while ((theBits >>> bit) === 0) {
                bit--;
            }
            x += bit;
            return Int32Array.from([x, y]);
        }
        /**
         * @return The width of the matrix
         */
        getWidth() {
            return this.width;
        }
        /**
         * @return The height of the matrix
         */
        getHeight() {
            return this.height;
        }
        /**
         * @return The row size of the matrix
         */
        getRowSize() {
            return this.rowSize;
        }
        /*@Override*/
        equals(o) {
            if (!(o instanceof BitMatrix)) {
                return false;
            }
            const other = o;
            return this.width === other.width && this.height === other.height && this.rowSize === other.rowSize &&
                Arrays.equals(this.bits, other.bits);
        }
        /*@Override*/
        hashCode() {
            let hash = this.width;
            hash = 31 * hash + this.width;
            hash = 31 * hash + this.height;
            hash = 31 * hash + this.rowSize;
            hash = 31 * hash + Arrays.hashCode(this.bits);
            return hash;
        }
        /**
         * @return string representation using "X" for set and " " for unset bits
         */
        /*@Override*/
        // public toString(): string {
        //   return toString(": "X, "  ")
        // }
        /**
         * @param setString representation of a set bit
         * @param unsetString representation of an unset bit
         * @return string representation of entire matrix utilizing given strings
         */
        // public toString(setString: string = "X ", unsetString: string = "  "): string {
        //   return this.buildToString(setString, unsetString, "\n")
        // }
        /**
         * @param setString representation of a set bit
         * @param unsetString representation of an unset bit
         * @param lineSeparator newline character in string representation
         * @return string representation of entire matrix utilizing given strings and line separator
         * @deprecated call {@link #toString(String,String)} only, which uses \n line separator always
         */
        // @Deprecated
        toString(setString = 'X ', unsetString = '  ', lineSeparator = '\n') {
            return this.buildToString(setString, unsetString, lineSeparator);
        }
        buildToString(setString, unsetString, lineSeparator) {
            let result = new StringBuilder();
            // result.append(lineSeparator);
            for (let y = 0, height = this.height; y < height; y++) {
                for (let x = 0, width = this.width; x < width; x++) {
                    result.append(this.get(x, y) ? setString : unsetString);
                }
                result.append(lineSeparator);
            }
            return result.toString();
        }
        /*@Override*/
        clone() {
            return new BitMatrix(this.width, this.height, this.rowSize, this.bits.slice());
        }
    }

    /**
     * Custom Error class of type Exception.
     */
    class NotFoundException extends Exception {
        static getNotFoundInstance() {
            return new NotFoundException();
        }
    }

    var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * <p>Encapsulates the result of decoding a barcode within an image.</p>
     *
     * @author Sean Owen
     */
    class Result {
        // public constructor(private text: string,
        //               Uint8Array rawBytes,
        //               ResultPoconst resultPoints: Int32Array,
        //               BarcodeFormat format) {
        //   this(text, rawBytes, resultPoints, format, System.currentTimeMillis())
        // }
        // public constructor(text: string,
        //               Uint8Array rawBytes,
        //               ResultPoconst resultPoints: Int32Array,
        //               BarcodeFormat format,
        //               long timestamp) {
        //   this(text, rawBytes, rawBytes == null ? 0 : 8 * rawBytes.length,
        //        resultPoints, format, timestamp)
        // }
        constructor(text, rawBytes, numBits = rawBytes == null ? 0 : 8 * rawBytes.length, resultPoints, format, timestamp = System.currentTimeMillis()) {
            this.text = text;
            this.rawBytes = rawBytes;
            this.numBits = numBits;
            this.resultPoints = resultPoints;
            this.format = format;
            this.timestamp = timestamp;
            this.text = text;
            this.rawBytes = rawBytes;
            if (undefined === numBits || null === numBits) {
                this.numBits = (rawBytes === null || rawBytes === undefined) ? 0 : 8 * rawBytes.length;
            }
            else {
                this.numBits = numBits;
            }
            this.resultPoints = resultPoints;
            this.format = format;
            this.resultMetadata = null;
            if (undefined === timestamp || null === timestamp) {
                this.timestamp = System.currentTimeMillis();
            }
            else {
                this.timestamp = timestamp;
            }
        }
        /**
         * @return raw text encoded by the barcode
         */
        getText() {
            return this.text;
        }
        /**
         * @return raw bytes encoded by the barcode, if applicable, otherwise {@code null}
         */
        getRawBytes() {
            return this.rawBytes;
        }
        /**
         * @return how many bits of {@link #getRawBytes()} are valid; typically 8 times its length
         * @since 3.3.0
         */
        getNumBits() {
            return this.numBits;
        }
        /**
         * @return points related to the barcode in the image. These are typically points
         *         identifying finder patterns or the corners of the barcode. The exact meaning is
         *         specific to the type of barcode that was decoded.
         */
        getResultPoints() {
            return this.resultPoints;
        }
        /**
         * @return {@link BarcodeFormat} representing the format of the barcode that was decoded
         */
        getBarcodeFormat() {
            return this.format;
        }
        /**
         * @return {@link Map} mapping {@link ResultMetadataType} keys to values. May be
         *   {@code null}. This contains optional metadata about what was detected about the barcode,
         *   like orientation.
         */
        getResultMetadata() {
            return this.resultMetadata;
        }
        putMetadata(type, value) {
            if (this.resultMetadata === null) {
                this.resultMetadata = new Map();
            }
            this.resultMetadata.set(type, value);
        }
        putAllMetadata(metadata) {
            if (metadata !== null) {
                if (this.resultMetadata === null) {
                    this.resultMetadata = metadata;
                }
                else {
                    this.resultMetadata = new Map(metadata);
                }
            }
        }
        addResultPoints(newPoints) {
            const oldPoints = this.resultPoints;
            if (oldPoints === null) {
                this.resultPoints = newPoints;
            }
            else if (newPoints !== null && newPoints.length > 0) {
                const allPoints = new Array(oldPoints.length + newPoints.length);
                System.arraycopy(oldPoints, 0, allPoints, 0, oldPoints.length);
                System.arraycopy(newPoints, 0, allPoints, oldPoints.length, newPoints.length);
                this.resultPoints = allPoints;
            }
        }
        getTimestamp() {
            return this.timestamp;
        }
        /*@Override*/
        toString() {
            return this.text;
        }
    }

    /*
     * Direct port to TypeScript of ZXing by Adrian Toșcă
     */
    /*
     * Copyright 2009 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /*namespace com.google.zxing {*/
    /**
     * Enumerates barcode formats known to this package. Please keep alphabetized.
     *
     * @author Sean Owen
     */
    var BarcodeFormat;
    (function (BarcodeFormat) {
        /** Aztec 2D barcode format. */
        BarcodeFormat[BarcodeFormat["AZTEC"] = 0] = "AZTEC";
        /** CODABAR 1D format. */
        BarcodeFormat[BarcodeFormat["CODABAR"] = 1] = "CODABAR";
        /** Code 39 1D format. */
        BarcodeFormat[BarcodeFormat["CODE_39"] = 2] = "CODE_39";
        /** Code 93 1D format. */
        BarcodeFormat[BarcodeFormat["CODE_93"] = 3] = "CODE_93";
        /** Code 128 1D format. */
        BarcodeFormat[BarcodeFormat["CODE_128"] = 4] = "CODE_128";
        /** Data Matrix 2D barcode format. */
        BarcodeFormat[BarcodeFormat["DATA_MATRIX"] = 5] = "DATA_MATRIX";
        /** EAN-8 1D format. */
        BarcodeFormat[BarcodeFormat["EAN_8"] = 6] = "EAN_8";
        /** EAN-13 1D format. */
        BarcodeFormat[BarcodeFormat["EAN_13"] = 7] = "EAN_13";
        /** ITF (Interleaved Two of Five) 1D format. */
        BarcodeFormat[BarcodeFormat["ITF"] = 8] = "ITF";
        /** MaxiCode 2D barcode format. */
        BarcodeFormat[BarcodeFormat["MAXICODE"] = 9] = "MAXICODE";
        /** PDF417 format. */
        BarcodeFormat[BarcodeFormat["PDF_417"] = 10] = "PDF_417";
        /** QR Code 2D barcode format. */
        BarcodeFormat[BarcodeFormat["QR_CODE"] = 11] = "QR_CODE";
        /** RSS 14 */
        BarcodeFormat[BarcodeFormat["RSS_14"] = 12] = "RSS_14";
        /** RSS EXPANDED */
        BarcodeFormat[BarcodeFormat["RSS_EXPANDED"] = 13] = "RSS_EXPANDED";
        /** UPC-A 1D format. */
        BarcodeFormat[BarcodeFormat["UPC_A"] = 14] = "UPC_A";
        /** UPC-E 1D format. */
        BarcodeFormat[BarcodeFormat["UPC_E"] = 15] = "UPC_E";
        /** UPC/EAN extension format. Not a stand-alone format. */
        BarcodeFormat[BarcodeFormat["UPC_EAN_EXTENSION"] = 16] = "UPC_EAN_EXTENSION";
    })(BarcodeFormat || (BarcodeFormat = {}));
    var BarcodeFormat$1 = BarcodeFormat;

    /*
     * Copyright 2008 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /*namespace com.google.zxing {*/
    /**
     * Represents some type of metadata about the result of the decoding that the decoder
     * wishes to communicate back to the caller.
     *
     * @author Sean Owen
     */
    var ResultMetadataType;
    (function (ResultMetadataType) {
        /**
         * Unspecified, application-specific metadata. Maps to an unspecified {@link Object}.
         */
        ResultMetadataType[ResultMetadataType["OTHER"] = 0] = "OTHER";
        /**
         * Denotes the likely approximate orientation of the barcode in the image. This value
         * is given as degrees rotated clockwise from the normal, upright orientation.
         * For example a 1D barcode which was found by reading top-to-bottom would be
         * said to have orientation "90". This key maps to an {@link Integer} whose
         * value is in the range [0,360).
         */
        ResultMetadataType[ResultMetadataType["ORIENTATION"] = 1] = "ORIENTATION";
        /**
         * <p>2D barcode formats typically encode text, but allow for a sort of 'byte mode'
         * which is sometimes used to encode binary data. While {@link Result} makes available
         * the complete raw bytes in the barcode for these formats, it does not offer the bytes
         * from the byte segments alone.</p>
         *
         * <p>This maps to a {@link java.util.List} of byte arrays corresponding to the
         * raw bytes in the byte segments in the barcode, in order.</p>
         */
        ResultMetadataType[ResultMetadataType["BYTE_SEGMENTS"] = 2] = "BYTE_SEGMENTS";
        /**
         * Error correction level used, if applicable. The value type depends on the
         * format, but is typically a String.
         */
        ResultMetadataType[ResultMetadataType["ERROR_CORRECTION_LEVEL"] = 3] = "ERROR_CORRECTION_LEVEL";
        /**
         * For some periodicals, indicates the issue number as an {@link Integer}.
         */
        ResultMetadataType[ResultMetadataType["ISSUE_NUMBER"] = 4] = "ISSUE_NUMBER";
        /**
         * For some products, indicates the suggested retail price in the barcode as a
         * formatted {@link String}.
         */
        ResultMetadataType[ResultMetadataType["SUGGESTED_PRICE"] = 5] = "SUGGESTED_PRICE";
        /**
         * For some products, the possible country of manufacture as a {@link String} denoting the
         * ISO country code. Some map to multiple possible countries, like "US/CA".
         */
        ResultMetadataType[ResultMetadataType["POSSIBLE_COUNTRY"] = 6] = "POSSIBLE_COUNTRY";
        /**
         * For some products, the extension text
         */
        ResultMetadataType[ResultMetadataType["UPC_EAN_EXTENSION"] = 7] = "UPC_EAN_EXTENSION";
        /**
         * PDF417-specific metadata
         */
        ResultMetadataType[ResultMetadataType["PDF417_EXTRA_METADATA"] = 8] = "PDF417_EXTRA_METADATA";
        /**
         * If the code format supports structured append and the current scanned code is part of one then the
         * sequence number is given with it.
         */
        ResultMetadataType[ResultMetadataType["STRUCTURED_APPEND_SEQUENCE"] = 9] = "STRUCTURED_APPEND_SEQUENCE";
        /**
         * If the code format supports structured append and the current scanned code is part of one then the
         * parity is given with it.
         */
        ResultMetadataType[ResultMetadataType["STRUCTURED_APPEND_PARITY"] = 10] = "STRUCTURED_APPEND_PARITY";
    })(ResultMetadataType || (ResultMetadataType = {}));
    var ResultMetadataType$1 = ResultMetadataType;

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /*namespace com.google.zxing.common {*/
    /*import java.util.List;*/
    /**
     * <p>Encapsulates the result of decoding a matrix of bits. This typically
     * applies to 2D barcode formats. For now it contains the raw bytes obtained,
     * as well as a String interpretation of those bytes, if applicable.</p>
     *
     * @author Sean Owen
     */
    class DecoderResult {
        // public constructor(rawBytes: Uint8Array,
        //                      text: string,
        //                      List<Uint8Array> byteSegments,
        //                      String ecLevel) {
        //   this(rawBytes, text, byteSegments, ecLevel, -1, -1)
        // }
        constructor(rawBytes, text, byteSegments, ecLevel, structuredAppendSequenceNumber = -1, structuredAppendParity = -1) {
            this.rawBytes = rawBytes;
            this.text = text;
            this.byteSegments = byteSegments;
            this.ecLevel = ecLevel;
            this.structuredAppendSequenceNumber = structuredAppendSequenceNumber;
            this.structuredAppendParity = structuredAppendParity;
            this.numBits = (rawBytes === undefined || rawBytes === null) ? 0 : 8 * rawBytes.length;
        }
        /**
         * @return raw bytes representing the result, or {@code null} if not applicable
         */
        getRawBytes() {
            return this.rawBytes;
        }
        /**
         * @return how many bits of {@link #getRawBytes()} are valid; typically 8 times its length
         * @since 3.3.0
         */
        getNumBits() {
            return this.numBits;
        }
        /**
         * @param numBits overrides the number of bits that are valid in {@link #getRawBytes()}
         * @since 3.3.0
         */
        setNumBits(numBits /*int*/) {
            this.numBits = numBits;
        }
        /**
         * @return text representation of the result
         */
        getText() {
            return this.text;
        }
        /**
         * @return list of byte segments in the result, or {@code null} if not applicable
         */
        getByteSegments() {
            return this.byteSegments;
        }
        /**
         * @return name of error correction level used, or {@code null} if not applicable
         */
        getECLevel() {
            return this.ecLevel;
        }
        /**
         * @return number of errors corrected, or {@code null} if not applicable
         */
        getErrorsCorrected() {
            return this.errorsCorrected;
        }
        setErrorsCorrected(errorsCorrected /*Integer*/) {
            this.errorsCorrected = errorsCorrected;
        }
        /**
         * @return number of erasures corrected, or {@code null} if not applicable
         */
        getErasures() {
            return this.erasures;
        }
        setErasures(erasures /*Integer*/) {
            this.erasures = erasures;
        }
        /**
         * @return arbitrary additional metadata
         */
        getOther() {
            return this.other;
        }
        setOther(other) {
            this.other = other;
        }
        hasStructuredAppend() {
            return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0;
        }
        getStructuredAppendParity() {
            return this.structuredAppendParity;
        }
        getStructuredAppendSequenceNumber() {
            return this.structuredAppendSequenceNumber;
        }
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * <p>This class contains utility methods for performing mathematical operations over
     * the Galois Fields. Operations use a given primitive polynomial in calculations.</p>
     *
     * <p>Throughout this package, elements of the GF are represented as an {@code int}
     * for convenience and speed (but at the cost of memory).
     * </p>
     *
     * @author Sean Owen
     * @author David Olivier
     */
    class AbstractGenericGF {
        /**
         * @return 2 to the power of a in GF(size)
         */
        exp(a) {
            return this.expTable[a];
        }
        /**
         * @return base 2 log of a in GF(size)
         */
        log(a /*int*/) {
            if (a === 0) {
                throw new IllegalArgumentException();
            }
            return this.logTable[a];
        }
        /**
         * Implements both addition and subtraction -- they are the same in GF(size).
         *
         * @return sum/difference of a and b
         */
        static addOrSubtract(a /*int*/, b /*int*/) {
            return a ^ b;
        }
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * <p>Represents a polynomial whose coefficients are elements of a GF.
     * Instances of this class are immutable.</p>
     *
     * <p>Much credit is due to William Rucklidge since portions of this code are an indirect
     * port of his C++ Reed-Solomon implementation.</p>
     *
     * @author Sean Owen
     */
    class GenericGFPoly {
        /**
         * @param field the {@link GenericGF} instance representing the field to use
         * to perform computations
         * @param coefficients coefficients as ints representing elements of GF(size), arranged
         * from most significant (highest-power term) coefficient to least significant
         * @throws IllegalArgumentException if argument is null or empty,
         * or if leading coefficient is 0 and this is not a
         * constant polynomial (that is, it is not the monomial "0")
         */
        constructor(field, coefficients) {
            if (coefficients.length === 0) {
                throw new IllegalArgumentException();
            }
            this.field = field;
            const coefficientsLength = coefficients.length;
            if (coefficientsLength > 1 && coefficients[0] === 0) {
                // Leading term must be non-zero for anything except the constant polynomial "0"
                let firstNonZero = 1;
                while (firstNonZero < coefficientsLength && coefficients[firstNonZero] === 0) {
                    firstNonZero++;
                }
                if (firstNonZero === coefficientsLength) {
                    this.coefficients = Int32Array.from([0]);
                }
                else {
                    this.coefficients = new Int32Array(coefficientsLength - firstNonZero);
                    System.arraycopy(coefficients, firstNonZero, this.coefficients, 0, this.coefficients.length);
                }
            }
            else {
                this.coefficients = coefficients;
            }
        }
        getCoefficients() {
            return this.coefficients;
        }
        /**
         * @return degree of this polynomial
         */
        getDegree() {
            return this.coefficients.length - 1;
        }
        /**
         * @return true iff this polynomial is the monomial "0"
         */
        isZero() {
            return this.coefficients[0] === 0;
        }
        /**
         * @return coefficient of x^degree term in this polynomial
         */
        getCoefficient(degree /*int*/) {
            return this.coefficients[this.coefficients.length - 1 - degree];
        }
        /**
         * @return evaluation of this polynomial at a given point
         */
        evaluateAt(a /*int*/) {
            if (a === 0) {
                // Just return the x^0 coefficient
                return this.getCoefficient(0);
            }
            const coefficients = this.coefficients;
            let result;
            if (a === 1) {
                // Just the sum of the coefficients
                result = 0;
                for (let i = 0, length = coefficients.length; i !== length; i++) {
                    const coefficient = coefficients[i];
                    result = AbstractGenericGF.addOrSubtract(result, coefficient);
                }
                return result;
            }
            result = coefficients[0];
            const size = coefficients.length;
            const field = this.field;
            for (let i = 1; i < size; i++) {
                result = AbstractGenericGF.addOrSubtract(field.multiply(a, result), coefficients[i]);
            }
            return result;
        }
        addOrSubtract(other) {
            if (!this.field.equals(other.field)) {
                throw new IllegalArgumentException('GenericGFPolys do not have same GenericGF field');
            }
            if (this.isZero()) {
                return other;
            }
            if (other.isZero()) {
                return this;
            }
            let smallerCoefficients = this.coefficients;
            let largerCoefficients = other.coefficients;
            if (smallerCoefficients.length > largerCoefficients.length) {
                const temp = smallerCoefficients;
                smallerCoefficients = largerCoefficients;
                largerCoefficients = temp;
            }
            let sumDiff = new Int32Array(largerCoefficients.length);
            const lengthDiff = largerCoefficients.length - smallerCoefficients.length;
            // Copy high-order terms only found in higher-degree polynomial's coefficients
            System.arraycopy(largerCoefficients, 0, sumDiff, 0, lengthDiff);
            for (let i = lengthDiff; i < largerCoefficients.length; i++) {
                sumDiff[i] = AbstractGenericGF.addOrSubtract(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
            }
            return new GenericGFPoly(this.field, sumDiff);
        }
        multiply(other) {
            if (!this.field.equals(other.field)) {
                throw new IllegalArgumentException('GenericGFPolys do not have same GenericGF field');
            }
            if (this.isZero() || other.isZero()) {
                return this.field.getZero();
            }
            const aCoefficients = this.coefficients;
            const aLength = aCoefficients.length;
            const bCoefficients = other.coefficients;
            const bLength = bCoefficients.length;
            const product = new Int32Array(aLength + bLength - 1);
            const field = this.field;
            for (let i = 0; i < aLength; i++) {
                const aCoeff = aCoefficients[i];
                for (let j = 0; j < bLength; j++) {
                    product[i + j] = AbstractGenericGF.addOrSubtract(product[i + j], field.multiply(aCoeff, bCoefficients[j]));
                }
            }
            return new GenericGFPoly(field, product);
        }
        multiplyScalar(scalar /*int*/) {
            if (scalar === 0) {
                return this.field.getZero();
            }
            if (scalar === 1) {
                return this;
            }
            const size = this.coefficients.length;
            const field = this.field;
            const product = new Int32Array(size);
            const coefficients = this.coefficients;
            for (let i = 0; i < size; i++) {
                product[i] = field.multiply(coefficients[i], scalar);
            }
            return new GenericGFPoly(field, product);
        }
        multiplyByMonomial(degree /*int*/, coefficient /*int*/) {
            if (degree < 0) {
                throw new IllegalArgumentException();
            }
            if (coefficient === 0) {
                return this.field.getZero();
            }
            const coefficients = this.coefficients;
            const size = coefficients.length;
            const product = new Int32Array(size + degree);
            const field = this.field;
            for (let i = 0; i < size; i++) {
                product[i] = field.multiply(coefficients[i], coefficient);
            }
            return new GenericGFPoly(field, product);
        }
        divide(other) {
            if (!this.field.equals(other.field)) {
                throw new IllegalArgumentException('GenericGFPolys do not have same GenericGF field');
            }
            if (other.isZero()) {
                throw new IllegalArgumentException('Divide by 0');
            }
            const field = this.field;
            let quotient = field.getZero();
            let remainder = this;
            const denominatorLeadingTerm = other.getCoefficient(other.getDegree());
            const inverseDenominatorLeadingTerm = field.inverse(denominatorLeadingTerm);
            while (remainder.getDegree() >= other.getDegree() && !remainder.isZero()) {
                const degreeDifference = remainder.getDegree() - other.getDegree();
                const scale = field.multiply(remainder.getCoefficient(remainder.getDegree()), inverseDenominatorLeadingTerm);
                const term = other.multiplyByMonomial(degreeDifference, scale);
                const iterationQuotient = field.buildMonomial(degreeDifference, scale);
                quotient = quotient.addOrSubtract(iterationQuotient);
                remainder = remainder.addOrSubtract(term);
            }
            return [quotient, remainder];
        }
        /*@Override*/
        toString() {
            let result = '';
            for (let degree = this.getDegree(); degree >= 0; degree--) {
                let coefficient = this.getCoefficient(degree);
                if (coefficient !== 0) {
                    if (coefficient < 0) {
                        result += ' - ';
                        coefficient = -coefficient;
                    }
                    else {
                        if (result.length > 0) {
                            result += ' + ';
                        }
                    }
                    if (degree === 0 || coefficient !== 1) {
                        const alphaPower = this.field.log(coefficient);
                        if (alphaPower === 0) {
                            result += '1';
                        }
                        else if (alphaPower === 1) {
                            result += 'a';
                        }
                        else {
                            result += 'a^';
                            result += alphaPower;
                        }
                    }
                    if (degree !== 0) {
                        if (degree === 1) {
                            result += 'x';
                        }
                        else {
                            result += 'x^';
                            result += degree;
                        }
                    }
                }
            }
            return result;
        }
    }

    /**
     * Custom Error class of type Exception.
     */
    class ArithmeticException extends Exception {
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * <p>This class contains utility methods for performing mathematical operations over
     * the Galois Fields. Operations use a given primitive polynomial in calculations.</p>
     *
     * <p>Throughout this package, elements of the GF are represented as an {@code int}
     * for convenience and speed (but at the cost of memory).
     * </p>
     *
     * @author Sean Owen
     * @author David Olivier
     */
    class GenericGF extends AbstractGenericGF {
        /**
         * Create a representation of GF(size) using the given primitive polynomial.
         *
         * @param primitive irreducible polynomial whose coefficients are represented by
         *  the bits of an int, where the least-significant bit represents the constant
         *  coefficient
         * @param size the size of the field
         * @param b the factor b in the generator polynomial can be 0- or 1-based
         *  (g(x) = (x+a^b)(x+a^(b+1))...(x+a^(b+2t-1))).
         *  In most cases it should be 1, but for QR code it is 0.
         */
        constructor(primitive /*int*/, size /*int*/, generatorBase /*int*/) {
            super();
            this.primitive = primitive;
            this.size = size;
            this.generatorBase = generatorBase;
            const expTable = new Int32Array(size);
            let x = 1;
            for (let i = 0; i < size; i++) {
                expTable[i] = x;
                x *= 2; // we're assuming the generator alpha is 2
                if (x >= size) {
                    x ^= primitive;
                    x &= size - 1;
                }
            }
            this.expTable = expTable;
            const logTable = new Int32Array(size);
            for (let i = 0; i < size - 1; i++) {
                logTable[expTable[i]] = i;
            }
            this.logTable = logTable;
            // logTable[0] == 0 but this should never be used
            this.zero = new GenericGFPoly(this, Int32Array.from([0]));
            this.one = new GenericGFPoly(this, Int32Array.from([1]));
        }
        getZero() {
            return this.zero;
        }
        getOne() {
            return this.one;
        }
        /**
         * @return the monomial representing coefficient * x^degree
         */
        buildMonomial(degree /*int*/, coefficient /*int*/) {
            if (degree < 0) {
                throw new IllegalArgumentException();
            }
            if (coefficient === 0) {
                return this.zero;
            }
            const coefficients = new Int32Array(degree + 1);
            coefficients[0] = coefficient;
            return new GenericGFPoly(this, coefficients);
        }
        /**
         * @return multiplicative inverse of a
         */
        inverse(a /*int*/) {
            if (a === 0) {
                throw new ArithmeticException();
            }
            return this.expTable[this.size - this.logTable[a] - 1];
        }
        /**
         * @return product of a and b in GF(size)
         */
        multiply(a /*int*/, b /*int*/) {
            if (a === 0 || b === 0) {
                return 0;
            }
            return this.expTable[(this.logTable[a] + this.logTable[b]) % (this.size - 1)];
        }
        getSize() {
            return this.size;
        }
        getGeneratorBase() {
            return this.generatorBase;
        }
        /*@Override*/
        toString() {
            return ('GF(0x' + Integer.toHexString(this.primitive) + ',' + this.size + ')');
        }
        equals(o) {
            return o === this;
        }
    }
    GenericGF.AZTEC_DATA_12 = new GenericGF(0x1069, 4096, 1); // x^12 + x^6 + x^5 + x^3 + 1
    GenericGF.AZTEC_DATA_10 = new GenericGF(0x409, 1024, 1); // x^10 + x^3 + 1
    GenericGF.AZTEC_DATA_6 = new GenericGF(0x43, 64, 1); // x^6 + x + 1
    GenericGF.AZTEC_PARAM = new GenericGF(0x13, 16, 1); // x^4 + x + 1
    GenericGF.QR_CODE_FIELD_256 = new GenericGF(0x011d, 256, 0); // x^8 + x^4 + x^3 + x^2 + 1
    GenericGF.DATA_MATRIX_FIELD_256 = new GenericGF(0x012d, 256, 1); // x^8 + x^5 + x^3 + x^2 + 1
    GenericGF.AZTEC_DATA_8 = GenericGF.DATA_MATRIX_FIELD_256;
    GenericGF.MAXICODE_FIELD_64 = GenericGF.AZTEC_DATA_6;

    /**
     * Custom Error class of type Exception.
     */
    class ReedSolomonException extends Exception {
    }

    /**
     * Custom Error class of type Exception.
     */
    class IllegalStateException extends Exception {
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * <p>Implements Reed-Solomon decoding, as the name implies.</p>
     *
     * <p>The algorithm will not be explained here, but the following references were helpful
     * in creating this implementation:</p>
     *
     * <ul>
     * <li>Bruce Maggs.
     * <a href="http://www.cs.cmu.edu/afs/cs.cmu.edu/project/pscico-guyb/realworld/www/rs_decode.ps">
     * "Decoding Reed-Solomon Codes"</a> (see discussion of Forney's Formula)</li>
     * <li>J.I. Hall. <a href="www.mth.msu.edu/~jhall/classes/codenotes/GRS.pdf">
     * "Chapter 5. Generalized Reed-Solomon Codes"</a>
     * (see discussion of Euclidean algorithm)</li>
     * </ul>
     *
     * <p>Much credit is due to William Rucklidge since portions of this code are an indirect
     * port of his C++ Reed-Solomon implementation.</p>
     *
     * @author Sean Owen
     * @author William Rucklidge
     * @author sanfordsquires
     */
    class ReedSolomonDecoder {
        constructor(field) {
            this.field = field;
        }
        /**
         * <p>Decodes given set of received codewords, which include both data and error-correction
         * codewords. Really, this means it uses Reed-Solomon to detect and correct errors, in-place,
         * in the input.</p>
         *
         * @param received data and error-correction codewords
         * @param twoS number of error-correction codewords available
         * @throws ReedSolomonException if decoding fails for any reason
         */
        decode(received, twoS /*int*/) {
            const field = this.field;
            const poly = new GenericGFPoly(field, received);
            const syndromeCoefficients = new Int32Array(twoS);
            let noError = true;
            for (let i = 0; i < twoS; i++) {
                const evalResult = poly.evaluateAt(field.exp(i + field.getGeneratorBase()));
                syndromeCoefficients[syndromeCoefficients.length - 1 - i] = evalResult;
                if (evalResult !== 0) {
                    noError = false;
                }
            }
            if (noError) {
                return;
            }
            const syndrome = new GenericGFPoly(field, syndromeCoefficients);
            const sigmaOmega = this.runEuclideanAlgorithm(field.buildMonomial(twoS, 1), syndrome, twoS);
            const sigma = sigmaOmega[0];
            const omega = sigmaOmega[1];
            const errorLocations = this.findErrorLocations(sigma);
            const errorMagnitudes = this.findErrorMagnitudes(omega, errorLocations);
            for (let i = 0; i < errorLocations.length; i++) {
                const position = received.length - 1 - field.log(errorLocations[i]);
                if (position < 0) {
                    throw new ReedSolomonException('Bad error location');
                }
                received[position] = GenericGF.addOrSubtract(received[position], errorMagnitudes[i]);
            }
        }
        runEuclideanAlgorithm(a, b, R /*int*/) {
            // Assume a's degree is >= b's
            if (a.getDegree() < b.getDegree()) {
                const temp = a;
                a = b;
                b = temp;
            }
            const field = this.field;
            let rLast = a;
            let r = b;
            let tLast = field.getZero();
            let t = field.getOne();
            // Run Euclidean algorithm until r's degree is less than R/2
            while (r.getDegree() >= (R / 2 | 0)) {
                let rLastLast = rLast;
                let tLastLast = tLast;
                rLast = r;
                tLast = t;
                // Divide rLastLast by rLast, with quotient in q and remainder in r
                if (rLast.isZero()) {
                    // Oops, Euclidean algorithm already terminated?
                    throw new ReedSolomonException('r_{i-1} was zero');
                }
                r = rLastLast;
                let q = field.getZero();
                const denominatorLeadingTerm = rLast.getCoefficient(rLast.getDegree());
                const dltInverse = field.inverse(denominatorLeadingTerm);
                while (r.getDegree() >= rLast.getDegree() && !r.isZero()) {
                    const degreeDiff = r.getDegree() - rLast.getDegree();
                    const scale = field.multiply(r.getCoefficient(r.getDegree()), dltInverse);
                    q = q.addOrSubtract(field.buildMonomial(degreeDiff, scale));
                    r = r.addOrSubtract(rLast.multiplyByMonomial(degreeDiff, scale));
                }
                t = q.multiply(tLast).addOrSubtract(tLastLast);
                if (r.getDegree() >= rLast.getDegree()) {
                    throw new IllegalStateException('Division algorithm failed to reduce polynomial?');
                }
            }
            const sigmaTildeAtZero = t.getCoefficient(0);
            if (sigmaTildeAtZero === 0) {
                throw new ReedSolomonException('sigmaTilde(0) was zero');
            }
            const inverse = field.inverse(sigmaTildeAtZero);
            const sigma = t.multiplyScalar(inverse);
            const omega = r.multiplyScalar(inverse);
            return [sigma, omega];
        }
        findErrorLocations(errorLocator) {
            // This is a direct application of Chien's search
            const numErrors = errorLocator.getDegree();
            if (numErrors === 1) { // shortcut
                return Int32Array.from([errorLocator.getCoefficient(1)]);
            }
            const result = new Int32Array(numErrors);
            let e = 0;
            const field = this.field;
            for (let i = 1; i < field.getSize() && e < numErrors; i++) {
                if (errorLocator.evaluateAt(i) === 0) {
                    result[e] = field.inverse(i);
                    e++;
                }
            }
            if (e !== numErrors) {
                throw new ReedSolomonException('Error locator degree does not match number of roots');
            }
            return result;
        }
        findErrorMagnitudes(errorEvaluator, errorLocations) {
            // This is directly applying Forney's Formula
            const s = errorLocations.length;
            const result = new Int32Array(s);
            const field = this.field;
            for (let i = 0; i < s; i++) {
                const xiInverse = field.inverse(errorLocations[i]);
                let denominator = 1;
                for (let j = 0; j < s; j++) {
                    if (i !== j) {
                        // denominator = field.multiply(denominator,
                        //    GenericGF.addOrSubtract(1, field.multiply(errorLocations[j], xiInverse)))
                        // Above should work but fails on some Apple and Linux JDKs due to a Hotspot bug.
                        // Below is a funny-looking workaround from Steven Parkes
                        const term = field.multiply(errorLocations[j], xiInverse);
                        const termPlus1 = (term & 0x1) === 0 ? term | 1 : term & ~1;
                        denominator = field.multiply(denominator, termPlus1);
                    }
                }
                result[i] = field.multiply(errorEvaluator.evaluateAt(xiInverse), field.inverse(denominator));
                if (field.getGeneratorBase() !== 0) {
                    result[i] = field.multiply(result[i], xiInverse);
                }
            }
            return result;
        }
    }

    /*
     * Copyright 2010 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // import java.util.Arrays;
    var Table;
    (function (Table) {
        Table[Table["UPPER"] = 0] = "UPPER";
        Table[Table["LOWER"] = 1] = "LOWER";
        Table[Table["MIXED"] = 2] = "MIXED";
        Table[Table["DIGIT"] = 3] = "DIGIT";
        Table[Table["PUNCT"] = 4] = "PUNCT";
        Table[Table["BINARY"] = 5] = "BINARY";
    })(Table || (Table = {}));

    /*
     * Copyright 2012 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /*namespace com.google.zxing.common.detector {*/
    /**
     * General math-related and numeric utility functions.
     */
    class MathUtils {
        MathUtils() {
        }
        /**
         * Ends up being a bit faster than {@link Math#round(float)}. This merely rounds its
         * argument to the nearest int, where x.5 rounds up to x+1. Semantics of this shortcut
         * differ slightly from {@link Math#round(float)} in that half rounds down for negative
         * values. -2.5 rounds to -3, not -2. For purposes here it makes no difference.
         *
         * @param d real value to round
         * @return nearest {@code int}
         */
        static round(d /*float*/) {
            if (NaN === d)
                return 0;
            if (d <= Number.MIN_SAFE_INTEGER)
                return Number.MIN_SAFE_INTEGER;
            if (d >= Number.MAX_SAFE_INTEGER)
                return Number.MAX_SAFE_INTEGER;
            return /*(int) */ (d + (d < 0.0 ? -0.5 : 0.5)) | 0;
        }
        // TYPESCRIPTPORT: maybe remove round method and call directly Math.round, it looks like it doesn't make sense for js
        /**
         * @param aX point A x coordinate
         * @param aY point A y coordinate
         * @param bX point B x coordinate
         * @param bY point B y coordinate
         * @return Euclidean distance between points A and B
         */
        static distance(aX /*float|int*/, aY /*float|int*/, bX /*float|int*/, bY /*float|int*/) {
            const xDiff = aX - bX;
            const yDiff = aY - bY;
            return /*(float) */ Math.sqrt(xDiff * xDiff + yDiff * yDiff);
        }
        /**
         * @param aX point A x coordinate
         * @param aY point A y coordinate
         * @param bX point B x coordinate
         * @param bY point B y coordinate
         * @return Euclidean distance between points A and B
         */
        // public static distance(aX: number /*int*/, aY: number /*int*/, bX: number /*int*/, bY: number /*int*/): float {
        //   const xDiff = aX - bX
        //   const yDiff = aY - bY
        //   return (float) Math.sqrt(xDiff * xDiff + yDiff * yDiff);
        // }
        /**
         * @param array values to sum
         * @return sum of values in array
         */
        static sum(array) {
            let count = 0;
            for (let i = 0, length = array.length; i !== length; i++) {
                const a = array[i];
                count += a;
            }
            return count;
        }
    }

    /**
     * Ponyfill for Java's Float class.
     */
    class Float {
        /**
         * SincTS has no difference between int and float, there's all numbers,
         * this is used only to polyfill Java code.
         */
        static floatToIntBits(f) {
            return f;
        }
    }
    /**
     * The float max value in JS is the number max value.
     */
    Float.MAX_VALUE = Number.MAX_SAFE_INTEGER;

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * <p>Encapsulates a point of interest in an image containing a barcode. Typically, this
     * would be the location of a finder pattern or the corner of the barcode, for example.</p>
     *
     * @author Sean Owen
     */
    class ResultPoint {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        getX() {
            return this.x;
        }
        getY() {
            return this.y;
        }
        /*@Override*/
        equals(other) {
            if (other instanceof ResultPoint) {
                const otherPoint = other;
                return this.x === otherPoint.x && this.y === otherPoint.y;
            }
            return false;
        }
        /*@Override*/
        hashCode() {
            return 31 * Float.floatToIntBits(this.x) + Float.floatToIntBits(this.y);
        }
        /*@Override*/
        toString() {
            return '(' + this.x + ',' + this.y + ')';
        }
        /**
         * Orders an array of three ResultPoints in an order [A,B,C] such that AB is less than AC
         * and BC is less than AC, and the angle between BC and BA is less than 180 degrees.
         *
         * @param patterns array of three {@code ResultPoint} to order
         */
        static orderBestPatterns(patterns) {
            // Find distances between pattern centers
            const zeroOneDistance = this.distance(patterns[0], patterns[1]);
            const oneTwoDistance = this.distance(patterns[1], patterns[2]);
            const zeroTwoDistance = this.distance(patterns[0], patterns[2]);
            let pointA;
            let pointB;
            let pointC;
            // Assume one closest to other two is B; A and C will just be guesses at first
            if (oneTwoDistance >= zeroOneDistance && oneTwoDistance >= zeroTwoDistance) {
                pointB = patterns[0];
                pointA = patterns[1];
                pointC = patterns[2];
            }
            else if (zeroTwoDistance >= oneTwoDistance && zeroTwoDistance >= zeroOneDistance) {
                pointB = patterns[1];
                pointA = patterns[0];
                pointC = patterns[2];
            }
            else {
                pointB = patterns[2];
                pointA = patterns[0];
                pointC = patterns[1];
            }
            // Use cross product to figure out whether A and C are correct or flipped.
            // This asks whether BC x BA has a positive z component, which is the arrangement
            // we want for A, B, C. If it's negative, then we've got it flipped around and
            // should swap A and C.
            if (this.crossProductZ(pointA, pointB, pointC) < 0.0) {
                const temp = pointA;
                pointA = pointC;
                pointC = temp;
            }
            patterns[0] = pointA;
            patterns[1] = pointB;
            patterns[2] = pointC;
        }
        /**
         * @param pattern1 first pattern
         * @param pattern2 second pattern
         * @return distance between two points
         */
        static distance(pattern1, pattern2) {
            return MathUtils.distance(pattern1.x, pattern1.y, pattern2.x, pattern2.y);
        }
        /**
         * Returns the z component of the cross product between vectors BC and BA.
         */
        static crossProductZ(pointA, pointB, pointC) {
            const bX = pointB.x;
            const bY = pointB.y;
            return ((pointC.x - bX) * (pointA.y - bY)) - ((pointC.y - bY) * (pointA.x - bX));
        }
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * <p>Encapsulates the result of detecting a barcode in an image. This includes the raw
     * matrix of black/white pixels corresponding to the barcode, and possibly points of interest
     * in the image, like the location of finder patterns or corners of the barcode in the image.</p>
     *
     * @author Sean Owen
     */
    class DetectorResult {
        constructor(bits, points) {
            this.bits = bits;
            this.points = points;
        }
        getBits() {
            return this.bits;
        }
        getPoints() {
            return this.points;
        }
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Implementations of this class can, given locations of finder patterns for a QR code in an
     * image, sample the right points in the image to reconstruct the QR code, accounting for
     * perspective distortion. It is abstracted since it is relatively expensive and should be allowed
     * to take advantage of platform-specific optimized implementations, like Sun's Java Advanced
     * Imaging library, but which may not be available in other environments such as J2ME, and vice
     * versa.
     *
     * The implementation used can be controlled by calling {@link #setGridSampler(GridSampler)}
     * with an instance of a class which implements this interface.
     *
     * @author Sean Owen
     */
    class GridSampler {
        /**
         * <p>Checks a set of points that have been transformed to sample points on an image against
         * the image's dimensions to see if the point are even within the image.</p>
         *
         * <p>This method will actually "nudge" the endpoints back onto the image if they are found to be
         * barely (less than 1 pixel) off the image. This accounts for imperfect detection of finder
         * patterns in an image where the QR Code runs all the way to the image border.</p>
         *
         * <p>For efficiency, the method will check points from either end of the line until one is found
         * to be within the image. Because the set of points are assumed to be linear, this is valid.</p>
         *
         * @param image image into which the points should map
         * @param points actual points in x1,y1,...,xn,yn form
         * @throws NotFoundException if an endpoint is lies outside the image boundaries
         */
        static checkAndNudgePoints(image, points) {
            const width = image.getWidth();
            const height = image.getHeight();
            // Check and nudge points from start until we see some that are OK:
            let nudged = true;
            for (let offset = 0; offset < points.length && nudged; offset += 2) {
                const x = Math.floor(points[offset]);
                const y = Math.floor(points[offset + 1]);
                if (x < -1 || x > width || y < -1 || y > height) {
                    throw new NotFoundException();
                }
                nudged = false;
                if (x === -1) {
                    points[offset] = 0.0;
                    nudged = true;
                }
                else if (x === width) {
                    points[offset] = width - 1;
                    nudged = true;
                }
                if (y === -1) {
                    points[offset + 1] = 0.0;
                    nudged = true;
                }
                else if (y === height) {
                    points[offset + 1] = height - 1;
                    nudged = true;
                }
            }
            // Check and nudge points from end:
            nudged = true;
            for (let offset = points.length - 2; offset >= 0 && nudged; offset -= 2) {
                const x = Math.floor(points[offset]);
                const y = Math.floor(points[offset + 1]);
                if (x < -1 || x > width || y < -1 || y > height) {
                    throw new NotFoundException();
                }
                nudged = false;
                if (x === -1) {
                    points[offset] = 0.0;
                    nudged = true;
                }
                else if (x === width) {
                    points[offset] = width - 1;
                    nudged = true;
                }
                if (y === -1) {
                    points[offset + 1] = 0.0;
                    nudged = true;
                }
                else if (y === height) {
                    points[offset + 1] = height - 1;
                    nudged = true;
                }
            }
        }
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /*namespace com.google.zxing.common {*/
    /**
     * <p>This class implements a perspective transform in two dimensions. Given four source and four
     * destination points, it will compute the transformation implied between them. The code is based
     * directly upon section 3.4.2 of George Wolberg's "Digital Image Warping"; see pages 54-56.</p>
     *
     * @author Sean Owen
     */
    class PerspectiveTransform {
        constructor(a11 /*float*/, a21 /*float*/, a31 /*float*/, a12 /*float*/, a22 /*float*/, a32 /*float*/, a13 /*float*/, a23 /*float*/, a33 /*float*/) {
            this.a11 = a11;
            this.a21 = a21;
            this.a31 = a31;
            this.a12 = a12;
            this.a22 = a22;
            this.a32 = a32;
            this.a13 = a13;
            this.a23 = a23;
            this.a33 = a33;
        }
        static quadrilateralToQuadrilateral(x0 /*float*/, y0 /*float*/, x1 /*float*/, y1 /*float*/, x2 /*float*/, y2 /*float*/, x3 /*float*/, y3 /*float*/, x0p /*float*/, y0p /*float*/, x1p /*float*/, y1p /*float*/, x2p /*float*/, y2p /*float*/, x3p /*float*/, y3p /*float*/) {
            const qToS = PerspectiveTransform.quadrilateralToSquare(x0, y0, x1, y1, x2, y2, x3, y3);
            const sToQ = PerspectiveTransform.squareToQuadrilateral(x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p);
            return sToQ.times(qToS);
        }
        transformPoints(points) {
            const max = points.length;
            const a11 = this.a11;
            const a12 = this.a12;
            const a13 = this.a13;
            const a21 = this.a21;
            const a22 = this.a22;
            const a23 = this.a23;
            const a31 = this.a31;
            const a32 = this.a32;
            const a33 = this.a33;
            for (let i = 0; i < max; i += 2) {
                const x = points[i];
                const y = points[i + 1];
                const denominator = a13 * x + a23 * y + a33;
                points[i] = (a11 * x + a21 * y + a31) / denominator;
                points[i + 1] = (a12 * x + a22 * y + a32) / denominator;
            }
        }
        transformPointsWithValues(xValues, yValues) {
            const a11 = this.a11;
            const a12 = this.a12;
            const a13 = this.a13;
            const a21 = this.a21;
            const a22 = this.a22;
            const a23 = this.a23;
            const a31 = this.a31;
            const a32 = this.a32;
            const a33 = this.a33;
            const n = xValues.length;
            for (let i = 0; i < n; i++) {
                const x = xValues[i];
                const y = yValues[i];
                const denominator = a13 * x + a23 * y + a33;
                xValues[i] = (a11 * x + a21 * y + a31) / denominator;
                yValues[i] = (a12 * x + a22 * y + a32) / denominator;
            }
        }
        static squareToQuadrilateral(x0 /*float*/, y0 /*float*/, x1 /*float*/, y1 /*float*/, x2 /*float*/, y2 /*float*/, x3 /*float*/, y3 /*float*/) {
            const dx3 = x0 - x1 + x2 - x3;
            const dy3 = y0 - y1 + y2 - y3;
            if (dx3 === 0.0 && dy3 === 0.0) {
                // Affine
                return new PerspectiveTransform(x1 - x0, x2 - x1, x0, y1 - y0, y2 - y1, y0, 0.0, 0.0, 1.0);
            }
            else {
                const dx1 = x1 - x2;
                const dx2 = x3 - x2;
                const dy1 = y1 - y2;
                const dy2 = y3 - y2;
                const denominator = dx1 * dy2 - dx2 * dy1;
                const a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
                const a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
                return new PerspectiveTransform(x1 - x0 + a13 * x1, x3 - x0 + a23 * x3, x0, y1 - y0 + a13 * y1, y3 - y0 + a23 * y3, y0, a13, a23, 1.0);
            }
        }
        static quadrilateralToSquare(x0 /*float*/, y0 /*float*/, x1 /*float*/, y1 /*float*/, x2 /*float*/, y2 /*float*/, x3 /*float*/, y3 /*float*/) {
            // Here, the adjoint serves as the inverse:
            return PerspectiveTransform.squareToQuadrilateral(x0, y0, x1, y1, x2, y2, x3, y3).buildAdjoint();
        }
        buildAdjoint() {
            // Adjoint is the transpose of the cofactor matrix:
            return new PerspectiveTransform(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
        }
        times(other) {
            return new PerspectiveTransform(this.a11 * other.a11 + this.a21 * other.a12 + this.a31 * other.a13, this.a11 * other.a21 + this.a21 * other.a22 + this.a31 * other.a23, this.a11 * other.a31 + this.a21 * other.a32 + this.a31 * other.a33, this.a12 * other.a11 + this.a22 * other.a12 + this.a32 * other.a13, this.a12 * other.a21 + this.a22 * other.a22 + this.a32 * other.a23, this.a12 * other.a31 + this.a22 * other.a32 + this.a32 * other.a33, this.a13 * other.a11 + this.a23 * other.a12 + this.a33 * other.a13, this.a13 * other.a21 + this.a23 * other.a22 + this.a33 * other.a23, this.a13 * other.a31 + this.a23 * other.a32 + this.a33 * other.a33);
        }
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @author Sean Owen
     */
    class DefaultGridSampler extends GridSampler {
        /*@Override*/
        sampleGrid(image, dimensionX /*int*/, dimensionY /*int*/, p1ToX /*float*/, p1ToY /*float*/, p2ToX /*float*/, p2ToY /*float*/, p3ToX /*float*/, p3ToY /*float*/, p4ToX /*float*/, p4ToY /*float*/, p1FromX /*float*/, p1FromY /*float*/, p2FromX /*float*/, p2FromY /*float*/, p3FromX /*float*/, p3FromY /*float*/, p4FromX /*float*/, p4FromY /*float*/) {
            const transform = PerspectiveTransform.quadrilateralToQuadrilateral(p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY);
            return this.sampleGridWithTransform(image, dimensionX, dimensionY, transform);
        }
        /*@Override*/
        sampleGridWithTransform(image, dimensionX /*int*/, dimensionY /*int*/, transform) {
            if (dimensionX <= 0 || dimensionY <= 0) {
                throw new NotFoundException();
            }
            const bits = new BitMatrix(dimensionX, dimensionY);
            const points = new Float32Array(2 * dimensionX);
            for (let y = 0; y < dimensionY; y++) {
                const max = points.length;
                const iValue = y + 0.5;
                for (let x = 0; x < max; x += 2) {
                    points[x] = (x / 2) + 0.5;
                    points[x + 1] = iValue;
                }
                transform.transformPoints(points);
                // Quick check to see if points transformed to something inside the image
                // sufficient to check the endpoints
                GridSampler.checkAndNudgePoints(image, points);
                try {
                    for (let x = 0; x < max; x += 2) {
                        if (image.get(Math.floor(points[x]), Math.floor(points[x + 1]))) {
                            // Black(-ish) pixel
                            bits.set(x / 2, y);
                        }
                    }
                }
                catch (aioobe /*: ArrayIndexOutOfBoundsException*/) {
                    // This feels wrong, but, sometimes if the finder patterns are misidentified, the resulting
                    // transform gets "twisted" such that it maps a straight line of points to a set of points
                    // whose endpoints are in bounds, but others are not. There is probably some mathematical
                    // way to detect this about the transformation that I don't know yet.
                    // This results in an ugly runtime exception despite our clever checks above -- can't have
                    // that. We could check each point's coordinates but that feels duplicative. We settle for
                    // catching and wrapping ArrayIndexOutOfBoundsException.
                    throw new NotFoundException();
                }
            }
            return bits;
        }
    }

    class GridSamplerInstance {
        /**
         * Sets the implementation of GridSampler used by the library. One global
         * instance is stored, which may sound problematic. But, the implementation provided
         * ought to be appropriate for the entire platform, and all uses of this library
         * in the whole lifetime of the JVM. For instance, an Android activity can swap in
         * an implementation that takes advantage of native platform libraries.
         *
         * @param newGridSampler The platform-specific object to install.
         */
        static setGridSampler(newGridSampler) {
            GridSamplerInstance.gridSampler = newGridSampler;
        }
        /**
         * @return the current implementation of GridSampler
         */
        static getInstance() {
            return GridSamplerInstance.gridSampler;
        }
    }
    GridSamplerInstance.gridSampler = new DefaultGridSampler();

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * <p>Encapsulates a set of error-correction blocks in one symbol version. Most versions will
     * use blocks of differing sizes within one version, so, this encapsulates the parameters for
     * each set of blocks. It also holds the number of error-correction codewords per block since it
     * will be the same across all blocks within one version.</p>
     */
    class ECBlocks {
        constructor(ecCodewords, ecBlocks1, ecBlocks2) {
            this.ecCodewords = ecCodewords;
            this.ecBlocks = [ecBlocks1];
            ecBlocks2 && this.ecBlocks.push(ecBlocks2);
        }
        getECCodewords() {
            return this.ecCodewords;
        }
        getECBlocks() {
            return this.ecBlocks;
        }
    }
    /**
     * <p>Encapsulates the parameters for one error-correction block in one symbol version.
     * This includes the number of data codewords, and the number of times a block with these
     * parameters is used consecutively in the Data Matrix code version's format.</p>
     */
    class ECB {
        constructor(count, dataCodewords) {
            this.count = count;
            this.dataCodewords = dataCodewords;
        }
        getCount() {
            return this.count;
        }
        getDataCodewords() {
            return this.dataCodewords;
        }
    }
    /**
     * The Version object encapsulates attributes about a particular
     * size Data Matrix Code.
     *
     * @author bbrown@google.com (Brian Brown)
     */
    class Version {
        constructor(versionNumber, symbolSizeRows, symbolSizeColumns, dataRegionSizeRows, dataRegionSizeColumns, ecBlocks) {
            this.versionNumber = versionNumber;
            this.symbolSizeRows = symbolSizeRows;
            this.symbolSizeColumns = symbolSizeColumns;
            this.dataRegionSizeRows = dataRegionSizeRows;
            this.dataRegionSizeColumns = dataRegionSizeColumns;
            this.ecBlocks = ecBlocks;
            // Calculate the total number of codewords
            let total = 0;
            const ecCodewords = ecBlocks.getECCodewords();
            const ecbArray = ecBlocks.getECBlocks();
            for (let ecBlock of ecbArray) {
                total += ecBlock.getCount() * (ecBlock.getDataCodewords() + ecCodewords);
            }
            this.totalCodewords = total;
        }
        getVersionNumber() {
            return this.versionNumber;
        }
        getSymbolSizeRows() {
            return this.symbolSizeRows;
        }
        getSymbolSizeColumns() {
            return this.symbolSizeColumns;
        }
        getDataRegionSizeRows() {
            return this.dataRegionSizeRows;
        }
        getDataRegionSizeColumns() {
            return this.dataRegionSizeColumns;
        }
        getTotalCodewords() {
            return this.totalCodewords;
        }
        getECBlocks() {
            return this.ecBlocks;
        }
        /**
         * <p>Deduces version information from Data Matrix dimensions.</p>
         *
         * @param numRows Number of rows in modules
         * @param numColumns Number of columns in modules
         * @return Version for a Data Matrix Code of those dimensions
         * @throws FormatException if dimensions do correspond to a valid Data Matrix size
         */
        static getVersionForDimensions(numRows, numColumns) {
            if ((numRows & 0x01) !== 0 || (numColumns & 0x01) !== 0) {
                throw new FormatException();
            }
            for (let version of Version.VERSIONS) {
                if (version.symbolSizeRows === numRows && version.symbolSizeColumns === numColumns) {
                    return version;
                }
            }
            throw new FormatException();
        }
        //  @Override
        toString() {
            return '' + this.versionNumber;
        }
        /**
         * See ISO 16022:2006 5.5.1 Table 7
         */
        static buildVersions() {
            return [
                new Version(1, 10, 10, 8, 8, new ECBlocks(5, new ECB(1, 3))),
                new Version(2, 12, 12, 10, 10, new ECBlocks(7, new ECB(1, 5))),
                new Version(3, 14, 14, 12, 12, new ECBlocks(10, new ECB(1, 8))),
                new Version(4, 16, 16, 14, 14, new ECBlocks(12, new ECB(1, 12))),
                new Version(5, 18, 18, 16, 16, new ECBlocks(14, new ECB(1, 18))),
                new Version(6, 20, 20, 18, 18, new ECBlocks(18, new ECB(1, 22))),
                new Version(7, 22, 22, 20, 20, new ECBlocks(20, new ECB(1, 30))),
                new Version(8, 24, 24, 22, 22, new ECBlocks(24, new ECB(1, 36))),
                new Version(9, 26, 26, 24, 24, new ECBlocks(28, new ECB(1, 44))),
                new Version(10, 32, 32, 14, 14, new ECBlocks(36, new ECB(1, 62))),
                new Version(11, 36, 36, 16, 16, new ECBlocks(42, new ECB(1, 86))),
                new Version(12, 40, 40, 18, 18, new ECBlocks(48, new ECB(1, 114))),
                new Version(13, 44, 44, 20, 20, new ECBlocks(56, new ECB(1, 144))),
                new Version(14, 48, 48, 22, 22, new ECBlocks(68, new ECB(1, 174))),
                new Version(15, 52, 52, 24, 24, new ECBlocks(42, new ECB(2, 102))),
                new Version(16, 64, 64, 14, 14, new ECBlocks(56, new ECB(2, 140))),
                new Version(17, 72, 72, 16, 16, new ECBlocks(36, new ECB(4, 92))),
                new Version(18, 80, 80, 18, 18, new ECBlocks(48, new ECB(4, 114))),
                new Version(19, 88, 88, 20, 20, new ECBlocks(56, new ECB(4, 144))),
                new Version(20, 96, 96, 22, 22, new ECBlocks(68, new ECB(4, 174))),
                new Version(21, 104, 104, 24, 24, new ECBlocks(56, new ECB(6, 136))),
                new Version(22, 120, 120, 18, 18, new ECBlocks(68, new ECB(6, 175))),
                new Version(23, 132, 132, 20, 20, new ECBlocks(62, new ECB(8, 163))),
                new Version(24, 144, 144, 22, 22, new ECBlocks(62, new ECB(8, 156), new ECB(2, 155))),
                new Version(25, 8, 18, 6, 16, new ECBlocks(7, new ECB(1, 5))),
                new Version(26, 8, 32, 6, 14, new ECBlocks(11, new ECB(1, 10))),
                new Version(27, 12, 26, 10, 24, new ECBlocks(14, new ECB(1, 16))),
                new Version(28, 12, 36, 10, 16, new ECBlocks(18, new ECB(1, 22))),
                new Version(29, 16, 36, 14, 16, new ECBlocks(24, new ECB(1, 32))),
                new Version(30, 16, 48, 14, 22, new ECBlocks(28, new ECB(1, 49)))
            ];
        }
    }
    Version.VERSIONS = Version.buildVersions();

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * <p>This provides an easy abstraction to read bits at a time from a sequence of bytes, where the
     * number of bits read is not often a multiple of 8.</p>
     *
     * <p>This class is thread-safe but not reentrant -- unless the caller modifies the bytes array
     * it passed in, in which case all bets are off.</p>
     *
     * @author Sean Owen
     */
    class BitSource {
        /**
         * @param bytes bytes from which this will read bits. Bits will be read from the first byte first.
         * Bits are read within a byte from most-significant to least-significant bit.
         */
        constructor(bytes) {
            this.bytes = bytes;
            this.byteOffset = 0;
            this.bitOffset = 0;
        }
        /**
         * @return index of next bit in current byte which would be read by the next call to {@link #readBits(int)}.
         */
        getBitOffset() {
            return this.bitOffset;
        }
        /**
         * @return index of next byte in input byte array which would be read by the next call to {@link #readBits(int)}.
         */
        getByteOffset() {
            return this.byteOffset;
        }
        /**
         * @param numBits number of bits to read
         * @return int representing the bits read. The bits will appear as the least-significant
         *         bits of the int
         * @throws IllegalArgumentException if numBits isn't in [1,32] or more than is available
         */
        readBits(numBits /*int*/) {
            if (numBits < 1 || numBits > 32 || numBits > this.available()) {
                throw new IllegalArgumentException('' + numBits);
            }
            let result = 0;
            let bitOffset = this.bitOffset;
            let byteOffset = this.byteOffset;
            const bytes = this.bytes;
            // First, read remainder from current byte
            if (bitOffset > 0) {
                const bitsLeft = 8 - bitOffset;
                const toRead = numBits < bitsLeft ? numBits : bitsLeft;
                const bitsToNotRead = bitsLeft - toRead;
                const mask = (0xFF >> (8 - toRead)) << bitsToNotRead;
                result = (bytes[byteOffset] & mask) >> bitsToNotRead;
                numBits -= toRead;
                bitOffset += toRead;
                if (bitOffset === 8) {
                    bitOffset = 0;
                    byteOffset++;
                }
            }
            // Next read whole bytes
            if (numBits > 0) {
                while (numBits >= 8) {
                    result = (result << 8) | (bytes[byteOffset] & 0xFF);
                    byteOffset++;
                    numBits -= 8;
                }
                // Finally read a partial byte
                if (numBits > 0) {
                    const bitsToNotRead = 8 - numBits;
                    const mask = (0xFF >> bitsToNotRead) << bitsToNotRead;
                    result = (result << numBits) | ((bytes[byteOffset] & mask) >> bitsToNotRead);
                    bitOffset += numBits;
                }
            }
            this.bitOffset = bitOffset;
            this.byteOffset = byteOffset;
            return result;
        }
        /**
         * @return number of bits that can be read successfully
         */
        available() {
            return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
        }
    }

    /*
     * Copyright 2008 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var Mode;
    (function (Mode) {
        Mode[Mode["PAD_ENCODE"] = 0] = "PAD_ENCODE";
        Mode[Mode["ASCII_ENCODE"] = 1] = "ASCII_ENCODE";
        Mode[Mode["C40_ENCODE"] = 2] = "C40_ENCODE";
        Mode[Mode["TEXT_ENCODE"] = 3] = "TEXT_ENCODE";
        Mode[Mode["ANSIX12_ENCODE"] = 4] = "ANSIX12_ENCODE";
        Mode[Mode["EDIFACT_ENCODE"] = 5] = "EDIFACT_ENCODE";
        Mode[Mode["BASE256_ENCODE"] = 6] = "BASE256_ENCODE";
    })(Mode || (Mode = {}));

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var ErrorCorrectionLevelValues;
    (function (ErrorCorrectionLevelValues) {
        ErrorCorrectionLevelValues[ErrorCorrectionLevelValues["L"] = 0] = "L";
        ErrorCorrectionLevelValues[ErrorCorrectionLevelValues["M"] = 1] = "M";
        ErrorCorrectionLevelValues[ErrorCorrectionLevelValues["Q"] = 2] = "Q";
        ErrorCorrectionLevelValues[ErrorCorrectionLevelValues["H"] = 3] = "H";
    })(ErrorCorrectionLevelValues || (ErrorCorrectionLevelValues = {}));
    /**
     * <p>See ISO 18004:2006, 6.5.1. This enum encapsulates the four error correction levels
     * defined by the QR code standard.</p>
     *
     * @author Sean Owen
     */
    class ErrorCorrectionLevel {
        constructor(value, stringValue, bits /*int*/) {
            this.value = value;
            this.stringValue = stringValue;
            this.bits = bits;
            ErrorCorrectionLevel.FOR_BITS.set(bits, this);
            ErrorCorrectionLevel.FOR_VALUE.set(value, this);
        }
        getValue() {
            return this.value;
        }
        getBits() {
            return this.bits;
        }
        static fromString(s) {
            switch (s) {
                case 'L': return ErrorCorrectionLevel.L;
                case 'M': return ErrorCorrectionLevel.M;
                case 'Q': return ErrorCorrectionLevel.Q;
                case 'H': return ErrorCorrectionLevel.H;
                default: throw new ArgumentException(s + 'not available');
            }
        }
        toString() {
            return this.stringValue;
        }
        equals(o) {
            if (!(o instanceof ErrorCorrectionLevel)) {
                return false;
            }
            const other = o;
            return this.value === other.value;
        }
        /**
         * @param bits int containing the two bits encoding a QR Code's error correction level
         * @return ErrorCorrectionLevel representing the encoded error correction level
         */
        static forBits(bits /*int*/) {
            if (bits < 0 || bits >= ErrorCorrectionLevel.FOR_BITS.size) {
                throw new IllegalArgumentException();
            }
            return ErrorCorrectionLevel.FOR_BITS.get(bits);
        }
    }
    ErrorCorrectionLevel.FOR_BITS = new Map();
    ErrorCorrectionLevel.FOR_VALUE = new Map();
    /** L = ~7% correction */
    ErrorCorrectionLevel.L = new ErrorCorrectionLevel(ErrorCorrectionLevelValues.L, 'L', 0x01);
    /** M = ~15% correction */
    ErrorCorrectionLevel.M = new ErrorCorrectionLevel(ErrorCorrectionLevelValues.M, 'M', 0x00);
    /** Q = ~25% correction */
    ErrorCorrectionLevel.Q = new ErrorCorrectionLevel(ErrorCorrectionLevelValues.Q, 'Q', 0x03);
    /** H = ~30% correction */
    ErrorCorrectionLevel.H = new ErrorCorrectionLevel(ErrorCorrectionLevelValues.H, 'H', 0x02);

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * <p>Encapsulates a QR Code's format information, including the data mask used and
     * error correction level.</p>
     *
     * @author Sean Owen
     * @see DataMask
     * @see ErrorCorrectionLevel
     */
    class FormatInformation {
        constructor(formatInfo /*int*/) {
            // Bits 3,4
            this.errorCorrectionLevel = ErrorCorrectionLevel.forBits((formatInfo >> 3) & 0x03);
            // Bottom 3 bits
            this.dataMask = /*(byte) */ (formatInfo & 0x07);
        }
        static numBitsDiffering(a /*int*/, b /*int*/) {
            return Integer.bitCount(a ^ b);
        }
        /**
         * @param maskedFormatInfo1 format info indicator, with mask still applied
         * @param maskedFormatInfo2 second copy of same info; both are checked at the same time
         *  to establish best match
         * @return information about the format it specifies, or {@code null}
         *  if doesn't seem to match any known pattern
         */
        static decodeFormatInformation(maskedFormatInfo1 /*int*/, maskedFormatInfo2 /*int*/) {
            const formatInfo = FormatInformation.doDecodeFormatInformation(maskedFormatInfo1, maskedFormatInfo2);
            if (formatInfo !== null) {
                return formatInfo;
            }
            // Should return null, but, some QR codes apparently
            // do not mask this info. Try again by actually masking the pattern
            // first
            return FormatInformation.doDecodeFormatInformation(maskedFormatInfo1 ^ FormatInformation.FORMAT_INFO_MASK_QR, maskedFormatInfo2 ^ FormatInformation.FORMAT_INFO_MASK_QR);
        }
        static doDecodeFormatInformation(maskedFormatInfo1 /*int*/, maskedFormatInfo2 /*int*/) {
            // Find the int in FORMAT_INFO_DECODE_LOOKUP with fewest bits differing
            let bestDifference = Number.MAX_SAFE_INTEGER;
            let bestFormatInfo = 0;
            for (const decodeInfo of FormatInformation.FORMAT_INFO_DECODE_LOOKUP) {
                const targetInfo = decodeInfo[0];
                if (targetInfo === maskedFormatInfo1 || targetInfo === maskedFormatInfo2) {
                    // Found an exact match
                    return new FormatInformation(decodeInfo[1]);
                }
                let bitsDifference = FormatInformation.numBitsDiffering(maskedFormatInfo1, targetInfo);
                if (bitsDifference < bestDifference) {
                    bestFormatInfo = decodeInfo[1];
                    bestDifference = bitsDifference;
                }
                if (maskedFormatInfo1 !== maskedFormatInfo2) {
                    // also try the other option
                    bitsDifference = FormatInformation.numBitsDiffering(maskedFormatInfo2, targetInfo);
                    if (bitsDifference < bestDifference) {
                        bestFormatInfo = decodeInfo[1];
                        bestDifference = bitsDifference;
                    }
                }
            }
            // Hamming distance of the 32 masked codes is 7, by construction, so <= 3 bits
            // differing means we found a match
            if (bestDifference <= 3) {
                return new FormatInformation(bestFormatInfo);
            }
            return null;
        }
        getErrorCorrectionLevel() {
            return this.errorCorrectionLevel;
        }
        getDataMask() {
            return this.dataMask;
        }
        /*@Override*/
        hashCode() {
            return (this.errorCorrectionLevel.getBits() << 3) | this.dataMask;
        }
        /*@Override*/
        equals(o) {
            if (!(o instanceof FormatInformation)) {
                return false;
            }
            const other = o;
            return this.errorCorrectionLevel === other.errorCorrectionLevel &&
                this.dataMask === other.dataMask;
        }
    }
    FormatInformation.FORMAT_INFO_MASK_QR = 0x5412;
    /**
     * See ISO 18004:2006, Annex C, Table C.1
     */
    FormatInformation.FORMAT_INFO_DECODE_LOOKUP = [
        Int32Array.from([0x5412, 0x00]),
        Int32Array.from([0x5125, 0x01]),
        Int32Array.from([0x5E7C, 0x02]),
        Int32Array.from([0x5B4B, 0x03]),
        Int32Array.from([0x45F9, 0x04]),
        Int32Array.from([0x40CE, 0x05]),
        Int32Array.from([0x4F97, 0x06]),
        Int32Array.from([0x4AA0, 0x07]),
        Int32Array.from([0x77C4, 0x08]),
        Int32Array.from([0x72F3, 0x09]),
        Int32Array.from([0x7DAA, 0x0A]),
        Int32Array.from([0x789D, 0x0B]),
        Int32Array.from([0x662F, 0x0C]),
        Int32Array.from([0x6318, 0x0D]),
        Int32Array.from([0x6C41, 0x0E]),
        Int32Array.from([0x6976, 0x0F]),
        Int32Array.from([0x1689, 0x10]),
        Int32Array.from([0x13BE, 0x11]),
        Int32Array.from([0x1CE7, 0x12]),
        Int32Array.from([0x19D0, 0x13]),
        Int32Array.from([0x0762, 0x14]),
        Int32Array.from([0x0255, 0x15]),
        Int32Array.from([0x0D0C, 0x16]),
        Int32Array.from([0x083B, 0x17]),
        Int32Array.from([0x355F, 0x18]),
        Int32Array.from([0x3068, 0x19]),
        Int32Array.from([0x3F31, 0x1A]),
        Int32Array.from([0x3A06, 0x1B]),
        Int32Array.from([0x24B4, 0x1C]),
        Int32Array.from([0x2183, 0x1D]),
        Int32Array.from([0x2EDA, 0x1E]),
        Int32Array.from([0x2BED, 0x1F]),
    ];

    /**
     * <p>Encapsulates a set of error-correction blocks in one symbol version. Most versions will
     * use blocks of differing sizes within one version, so, this encapsulates the parameters for
     * each set of blocks. It also holds the number of error-correction codewords per block since it
     * will be the same across all blocks within one version.</p>
     */
    class ECBlocks$1 {
        constructor(ecCodewordsPerBlock /*int*/, ...ecBlocks) {
            this.ecCodewordsPerBlock = ecCodewordsPerBlock;
            this.ecBlocks = ecBlocks;
        }
        getECCodewordsPerBlock() {
            return this.ecCodewordsPerBlock;
        }
        getNumBlocks() {
            let total = 0;
            const ecBlocks = this.ecBlocks;
            for (const ecBlock of ecBlocks) {
                total += ecBlock.getCount();
            }
            return total;
        }
        getTotalECCodewords() {
            return this.ecCodewordsPerBlock * this.getNumBlocks();
        }
        getECBlocks() {
            return this.ecBlocks;
        }
    }

    /**
     * <p>Encapsulates the parameters for one error-correction block in one symbol version.
     * This includes the number of data codewords, and the number of times a block with these
     * parameters is used consecutively in the QR code version's format.</p>
     */
    class ECB$1 {
        constructor(count /*int*/, dataCodewords /*int*/) {
            this.count = count;
            this.dataCodewords = dataCodewords;
        }
        getCount() {
            return this.count;
        }
        getDataCodewords() {
            return this.dataCodewords;
        }
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * See ISO 18004:2006 Annex D
     *
     * @author Sean Owen
     */
    class Version$1 {
        constructor(versionNumber /*int*/, alignmentPatternCenters, ...ecBlocks) {
            this.versionNumber = versionNumber;
            this.alignmentPatternCenters = alignmentPatternCenters;
            this.ecBlocks = ecBlocks;
            let total = 0;
            const ecCodewords = ecBlocks[0].getECCodewordsPerBlock();
            const ecbArray = ecBlocks[0].getECBlocks();
            for (const ecBlock of ecbArray) {
                total += ecBlock.getCount() * (ecBlock.getDataCodewords() + ecCodewords);
            }
            this.totalCodewords = total;
        }
        getVersionNumber() {
            return this.versionNumber;
        }
        getAlignmentPatternCenters() {
            return this.alignmentPatternCenters;
        }
        getTotalCodewords() {
            return this.totalCodewords;
        }
        getDimensionForVersion() {
            return 17 + 4 * this.versionNumber;
        }
        getECBlocksForLevel(ecLevel) {
            return this.ecBlocks[ecLevel.getValue()];
            // TYPESCRIPTPORT: original was using ordinal, and using the order of levels as defined in ErrorCorrectionLevel enum (LMQH)
            // I will use the direct value from ErrorCorrectionLevelValues enum which in typescript goes to a number
        }
        /**
         * <p>Deduces version information purely from QR Code dimensions.</p>
         *
         * @param dimension dimension in modules
         * @return Version for a QR Code of that dimension
         * @throws FormatException if dimension is not 1 mod 4
         */
        static getProvisionalVersionForDimension(dimension /*int*/) {
            if (dimension % 4 !== 1) {
                throw new FormatException();
            }
            try {
                return this.getVersionForNumber((dimension - 17) / 4);
            }
            catch (ignored /*: IllegalArgumentException*/) {
                throw new FormatException();
            }
        }
        static getVersionForNumber(versionNumber /*int*/) {
            if (versionNumber < 1 || versionNumber > 40) {
                throw new IllegalArgumentException();
            }
            return Version$1.VERSIONS[versionNumber - 1];
        }
        static decodeVersionInformation(versionBits /*int*/) {
            let bestDifference = Number.MAX_SAFE_INTEGER;
            let bestVersion = 0;
            for (let i = 0; i < Version$1.VERSION_DECODE_INFO.length; i++) {
                const targetVersion = Version$1.VERSION_DECODE_INFO[i];
                // Do the version info bits match exactly? done.
                if (targetVersion === versionBits) {
                    return Version$1.getVersionForNumber(i + 7);
                }
                // Otherwise see if this is the closest to a real version info bit string
                // we have seen so far
                const bitsDifference = FormatInformation.numBitsDiffering(versionBits, targetVersion);
                if (bitsDifference < bestDifference) {
                    bestVersion = i + 7;
                    bestDifference = bitsDifference;
                }
            }
            // We can tolerate up to 3 bits of error since no two version info codewords will
            // differ in less than 8 bits.
            if (bestDifference <= 3) {
                return Version$1.getVersionForNumber(bestVersion);
            }
            // If we didn't find a close enough match, fail
            return null;
        }
        /**
         * See ISO 18004:2006 Annex E
         */
        buildFunctionPattern() {
            const dimension = this.getDimensionForVersion();
            const bitMatrix = new BitMatrix(dimension);
            // Top left finder pattern + separator + format
            bitMatrix.setRegion(0, 0, 9, 9);
            // Top right finder pattern + separator + format
            bitMatrix.setRegion(dimension - 8, 0, 8, 9);
            // Bottom left finder pattern + separator + format
            bitMatrix.setRegion(0, dimension - 8, 9, 8);
            // Alignment patterns
            const max = this.alignmentPatternCenters.length;
            for (let x = 0; x < max; x++) {
                const i = this.alignmentPatternCenters[x] - 2;
                for (let y = 0; y < max; y++) {
                    if ((x === 0 && (y === 0 || y === max - 1)) || (x === max - 1 && y === 0)) {
                        // No alignment patterns near the three finder patterns
                        continue;
                    }
                    bitMatrix.setRegion(this.alignmentPatternCenters[y] - 2, i, 5, 5);
                }
            }
            // Vertical timing pattern
            bitMatrix.setRegion(6, 9, 1, dimension - 17);
            // Horizontal timing pattern
            bitMatrix.setRegion(9, 6, dimension - 17, 1);
            if (this.versionNumber > 6) {
                // Version info, top right
                bitMatrix.setRegion(dimension - 11, 0, 3, 6);
                // Version info, bottom left
                bitMatrix.setRegion(0, dimension - 11, 6, 3);
            }
            return bitMatrix;
        }
        /*@Override*/
        toString() {
            return '' + this.versionNumber;
        }
    }
    /**
       * See ISO 18004:2006 Annex D.
       * Element i represents the raw version bits that specify version i + 7
       */
    Version$1.VERSION_DECODE_INFO = Int32Array.from([
        0x07C94, 0x085BC, 0x09A99, 0x0A4D3, 0x0BBF6,
        0x0C762, 0x0D847, 0x0E60D, 0x0F928, 0x10B78,
        0x1145D, 0x12A17, 0x13532, 0x149A6, 0x15683,
        0x168C9, 0x177EC, 0x18EC4, 0x191E1, 0x1AFAB,
        0x1B08E, 0x1CC1A, 0x1D33F, 0x1ED75, 0x1F250,
        0x209D5, 0x216F0, 0x228BA, 0x2379F, 0x24B0B,
        0x2542E, 0x26A64, 0x27541, 0x28C69
    ]);
    /**
       * See ISO 18004:2006 6.5.1 Table 9
       */
    Version$1.VERSIONS = [
        new Version$1(1, new Int32Array(0), new ECBlocks$1(7, new ECB$1(1, 19)), new ECBlocks$1(10, new ECB$1(1, 16)), new ECBlocks$1(13, new ECB$1(1, 13)), new ECBlocks$1(17, new ECB$1(1, 9))),
        new Version$1(2, Int32Array.from([6, 18]), new ECBlocks$1(10, new ECB$1(1, 34)), new ECBlocks$1(16, new ECB$1(1, 28)), new ECBlocks$1(22, new ECB$1(1, 22)), new ECBlocks$1(28, new ECB$1(1, 16))),
        new Version$1(3, Int32Array.from([6, 22]), new ECBlocks$1(15, new ECB$1(1, 55)), new ECBlocks$1(26, new ECB$1(1, 44)), new ECBlocks$1(18, new ECB$1(2, 17)), new ECBlocks$1(22, new ECB$1(2, 13))),
        new Version$1(4, Int32Array.from([6, 26]), new ECBlocks$1(20, new ECB$1(1, 80)), new ECBlocks$1(18, new ECB$1(2, 32)), new ECBlocks$1(26, new ECB$1(2, 24)), new ECBlocks$1(16, new ECB$1(4, 9))),
        new Version$1(5, Int32Array.from([6, 30]), new ECBlocks$1(26, new ECB$1(1, 108)), new ECBlocks$1(24, new ECB$1(2, 43)), new ECBlocks$1(18, new ECB$1(2, 15), new ECB$1(2, 16)), new ECBlocks$1(22, new ECB$1(2, 11), new ECB$1(2, 12))),
        new Version$1(6, Int32Array.from([6, 34]), new ECBlocks$1(18, new ECB$1(2, 68)), new ECBlocks$1(16, new ECB$1(4, 27)), new ECBlocks$1(24, new ECB$1(4, 19)), new ECBlocks$1(28, new ECB$1(4, 15))),
        new Version$1(7, Int32Array.from([6, 22, 38]), new ECBlocks$1(20, new ECB$1(2, 78)), new ECBlocks$1(18, new ECB$1(4, 31)), new ECBlocks$1(18, new ECB$1(2, 14), new ECB$1(4, 15)), new ECBlocks$1(26, new ECB$1(4, 13), new ECB$1(1, 14))),
        new Version$1(8, Int32Array.from([6, 24, 42]), new ECBlocks$1(24, new ECB$1(2, 97)), new ECBlocks$1(22, new ECB$1(2, 38), new ECB$1(2, 39)), new ECBlocks$1(22, new ECB$1(4, 18), new ECB$1(2, 19)), new ECBlocks$1(26, new ECB$1(4, 14), new ECB$1(2, 15))),
        new Version$1(9, Int32Array.from([6, 26, 46]), new ECBlocks$1(30, new ECB$1(2, 116)), new ECBlocks$1(22, new ECB$1(3, 36), new ECB$1(2, 37)), new ECBlocks$1(20, new ECB$1(4, 16), new ECB$1(4, 17)), new ECBlocks$1(24, new ECB$1(4, 12), new ECB$1(4, 13))),
        new Version$1(10, Int32Array.from([6, 28, 50]), new ECBlocks$1(18, new ECB$1(2, 68), new ECB$1(2, 69)), new ECBlocks$1(26, new ECB$1(4, 43), new ECB$1(1, 44)), new ECBlocks$1(24, new ECB$1(6, 19), new ECB$1(2, 20)), new ECBlocks$1(28, new ECB$1(6, 15), new ECB$1(2, 16))),
        new Version$1(11, Int32Array.from([6, 30, 54]), new ECBlocks$1(20, new ECB$1(4, 81)), new ECBlocks$1(30, new ECB$1(1, 50), new ECB$1(4, 51)), new ECBlocks$1(28, new ECB$1(4, 22), new ECB$1(4, 23)), new ECBlocks$1(24, new ECB$1(3, 12), new ECB$1(8, 13))),
        new Version$1(12, Int32Array.from([6, 32, 58]), new ECBlocks$1(24, new ECB$1(2, 92), new ECB$1(2, 93)), new ECBlocks$1(22, new ECB$1(6, 36), new ECB$1(2, 37)), new ECBlocks$1(26, new ECB$1(4, 20), new ECB$1(6, 21)), new ECBlocks$1(28, new ECB$1(7, 14), new ECB$1(4, 15))),
        new Version$1(13, Int32Array.from([6, 34, 62]), new ECBlocks$1(26, new ECB$1(4, 107)), new ECBlocks$1(22, new ECB$1(8, 37), new ECB$1(1, 38)), new ECBlocks$1(24, new ECB$1(8, 20), new ECB$1(4, 21)), new ECBlocks$1(22, new ECB$1(12, 11), new ECB$1(4, 12))),
        new Version$1(14, Int32Array.from([6, 26, 46, 66]), new ECBlocks$1(30, new ECB$1(3, 115), new ECB$1(1, 116)), new ECBlocks$1(24, new ECB$1(4, 40), new ECB$1(5, 41)), new ECBlocks$1(20, new ECB$1(11, 16), new ECB$1(5, 17)), new ECBlocks$1(24, new ECB$1(11, 12), new ECB$1(5, 13))),
        new Version$1(15, Int32Array.from([6, 26, 48, 70]), new ECBlocks$1(22, new ECB$1(5, 87), new ECB$1(1, 88)), new ECBlocks$1(24, new ECB$1(5, 41), new ECB$1(5, 42)), new ECBlocks$1(30, new ECB$1(5, 24), new ECB$1(7, 25)), new ECBlocks$1(24, new ECB$1(11, 12), new ECB$1(7, 13))),
        new Version$1(16, Int32Array.from([6, 26, 50, 74]), new ECBlocks$1(24, new ECB$1(5, 98), new ECB$1(1, 99)), new ECBlocks$1(28, new ECB$1(7, 45), new ECB$1(3, 46)), new ECBlocks$1(24, new ECB$1(15, 19), new ECB$1(2, 20)), new ECBlocks$1(30, new ECB$1(3, 15), new ECB$1(13, 16))),
        new Version$1(17, Int32Array.from([6, 30, 54, 78]), new ECBlocks$1(28, new ECB$1(1, 107), new ECB$1(5, 108)), new ECBlocks$1(28, new ECB$1(10, 46), new ECB$1(1, 47)), new ECBlocks$1(28, new ECB$1(1, 22), new ECB$1(15, 23)), new ECBlocks$1(28, new ECB$1(2, 14), new ECB$1(17, 15))),
        new Version$1(18, Int32Array.from([6, 30, 56, 82]), new ECBlocks$1(30, new ECB$1(5, 120), new ECB$1(1, 121)), new ECBlocks$1(26, new ECB$1(9, 43), new ECB$1(4, 44)), new ECBlocks$1(28, new ECB$1(17, 22), new ECB$1(1, 23)), new ECBlocks$1(28, new ECB$1(2, 14), new ECB$1(19, 15))),
        new Version$1(19, Int32Array.from([6, 30, 58, 86]), new ECBlocks$1(28, new ECB$1(3, 113), new ECB$1(4, 114)), new ECBlocks$1(26, new ECB$1(3, 44), new ECB$1(11, 45)), new ECBlocks$1(26, new ECB$1(17, 21), new ECB$1(4, 22)), new ECBlocks$1(26, new ECB$1(9, 13), new ECB$1(16, 14))),
        new Version$1(20, Int32Array.from([6, 34, 62, 90]), new ECBlocks$1(28, new ECB$1(3, 107), new ECB$1(5, 108)), new ECBlocks$1(26, new ECB$1(3, 41), new ECB$1(13, 42)), new ECBlocks$1(30, new ECB$1(15, 24), new ECB$1(5, 25)), new ECBlocks$1(28, new ECB$1(15, 15), new ECB$1(10, 16))),
        new Version$1(21, Int32Array.from([6, 28, 50, 72, 94]), new ECBlocks$1(28, new ECB$1(4, 116), new ECB$1(4, 117)), new ECBlocks$1(26, new ECB$1(17, 42)), new ECBlocks$1(28, new ECB$1(17, 22), new ECB$1(6, 23)), new ECBlocks$1(30, new ECB$1(19, 16), new ECB$1(6, 17))),
        new Version$1(22, Int32Array.from([6, 26, 50, 74, 98]), new ECBlocks$1(28, new ECB$1(2, 111), new ECB$1(7, 112)), new ECBlocks$1(28, new ECB$1(17, 46)), new ECBlocks$1(30, new ECB$1(7, 24), new ECB$1(16, 25)), new ECBlocks$1(24, new ECB$1(34, 13))),
        new Version$1(23, Int32Array.from([6, 30, 54, 78, 102]), new ECBlocks$1(30, new ECB$1(4, 121), new ECB$1(5, 122)), new ECBlocks$1(28, new ECB$1(4, 47), new ECB$1(14, 48)), new ECBlocks$1(30, new ECB$1(11, 24), new ECB$1(14, 25)), new ECBlocks$1(30, new ECB$1(16, 15), new ECB$1(14, 16))),
        new Version$1(24, Int32Array.from([6, 28, 54, 80, 106]), new ECBlocks$1(30, new ECB$1(6, 117), new ECB$1(4, 118)), new ECBlocks$1(28, new ECB$1(6, 45), new ECB$1(14, 46)), new ECBlocks$1(30, new ECB$1(11, 24), new ECB$1(16, 25)), new ECBlocks$1(30, new ECB$1(30, 16), new ECB$1(2, 17))),
        new Version$1(25, Int32Array.from([6, 32, 58, 84, 110]), new ECBlocks$1(26, new ECB$1(8, 106), new ECB$1(4, 107)), new ECBlocks$1(28, new ECB$1(8, 47), new ECB$1(13, 48)), new ECBlocks$1(30, new ECB$1(7, 24), new ECB$1(22, 25)), new ECBlocks$1(30, new ECB$1(22, 15), new ECB$1(13, 16))),
        new Version$1(26, Int32Array.from([6, 30, 58, 86, 114]), new ECBlocks$1(28, new ECB$1(10, 114), new ECB$1(2, 115)), new ECBlocks$1(28, new ECB$1(19, 46), new ECB$1(4, 47)), new ECBlocks$1(28, new ECB$1(28, 22), new ECB$1(6, 23)), new ECBlocks$1(30, new ECB$1(33, 16), new ECB$1(4, 17))),
        new Version$1(27, Int32Array.from([6, 34, 62, 90, 118]), new ECBlocks$1(30, new ECB$1(8, 122), new ECB$1(4, 123)), new ECBlocks$1(28, new ECB$1(22, 45), new ECB$1(3, 46)), new ECBlocks$1(30, new ECB$1(8, 23), new ECB$1(26, 24)), new ECBlocks$1(30, new ECB$1(12, 15), new ECB$1(28, 16))),
        new Version$1(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new ECBlocks$1(30, new ECB$1(3, 117), new ECB$1(10, 118)), new ECBlocks$1(28, new ECB$1(3, 45), new ECB$1(23, 46)), new ECBlocks$1(30, new ECB$1(4, 24), new ECB$1(31, 25)), new ECBlocks$1(30, new ECB$1(11, 15), new ECB$1(31, 16))),
        new Version$1(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new ECBlocks$1(30, new ECB$1(7, 116), new ECB$1(7, 117)), new ECBlocks$1(28, new ECB$1(21, 45), new ECB$1(7, 46)), new ECBlocks$1(30, new ECB$1(1, 23), new ECB$1(37, 24)), new ECBlocks$1(30, new ECB$1(19, 15), new ECB$1(26, 16))),
        new Version$1(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new ECBlocks$1(30, new ECB$1(5, 115), new ECB$1(10, 116)), new ECBlocks$1(28, new ECB$1(19, 47), new ECB$1(10, 48)), new ECBlocks$1(30, new ECB$1(15, 24), new ECB$1(25, 25)), new ECBlocks$1(30, new ECB$1(23, 15), new ECB$1(25, 16))),
        new Version$1(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new ECBlocks$1(30, new ECB$1(13, 115), new ECB$1(3, 116)), new ECBlocks$1(28, new ECB$1(2, 46), new ECB$1(29, 47)), new ECBlocks$1(30, new ECB$1(42, 24), new ECB$1(1, 25)), new ECBlocks$1(30, new ECB$1(23, 15), new ECB$1(28, 16))),
        new Version$1(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new ECBlocks$1(30, new ECB$1(17, 115)), new ECBlocks$1(28, new ECB$1(10, 46), new ECB$1(23, 47)), new ECBlocks$1(30, new ECB$1(10, 24), new ECB$1(35, 25)), new ECBlocks$1(30, new ECB$1(19, 15), new ECB$1(35, 16))),
        new Version$1(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new ECBlocks$1(30, new ECB$1(17, 115), new ECB$1(1, 116)), new ECBlocks$1(28, new ECB$1(14, 46), new ECB$1(21, 47)), new ECBlocks$1(30, new ECB$1(29, 24), new ECB$1(19, 25)), new ECBlocks$1(30, new ECB$1(11, 15), new ECB$1(46, 16))),
        new Version$1(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new ECBlocks$1(30, new ECB$1(13, 115), new ECB$1(6, 116)), new ECBlocks$1(28, new ECB$1(14, 46), new ECB$1(23, 47)), new ECBlocks$1(30, new ECB$1(44, 24), new ECB$1(7, 25)), new ECBlocks$1(30, new ECB$1(59, 16), new ECB$1(1, 17))),
        new Version$1(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new ECBlocks$1(30, new ECB$1(12, 121), new ECB$1(7, 122)), new ECBlocks$1(28, new ECB$1(12, 47), new ECB$1(26, 48)), new ECBlocks$1(30, new ECB$1(39, 24), new ECB$1(14, 25)), new ECBlocks$1(30, new ECB$1(22, 15), new ECB$1(41, 16))),
        new Version$1(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new ECBlocks$1(30, new ECB$1(6, 121), new ECB$1(14, 122)), new ECBlocks$1(28, new ECB$1(6, 47), new ECB$1(34, 48)), new ECBlocks$1(30, new ECB$1(46, 24), new ECB$1(10, 25)), new ECBlocks$1(30, new ECB$1(2, 15), new ECB$1(64, 16))),
        new Version$1(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new ECBlocks$1(30, new ECB$1(17, 122), new ECB$1(4, 123)), new ECBlocks$1(28, new ECB$1(29, 46), new ECB$1(14, 47)), new ECBlocks$1(30, new ECB$1(49, 24), new ECB$1(10, 25)), new ECBlocks$1(30, new ECB$1(24, 15), new ECB$1(46, 16))),
        new Version$1(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new ECBlocks$1(30, new ECB$1(4, 122), new ECB$1(18, 123)), new ECBlocks$1(28, new ECB$1(13, 46), new ECB$1(32, 47)), new ECBlocks$1(30, new ECB$1(48, 24), new ECB$1(14, 25)), new ECBlocks$1(30, new ECB$1(42, 15), new ECB$1(32, 16))),
        new Version$1(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new ECBlocks$1(30, new ECB$1(20, 117), new ECB$1(4, 118)), new ECBlocks$1(28, new ECB$1(40, 47), new ECB$1(7, 48)), new ECBlocks$1(30, new ECB$1(43, 24), new ECB$1(22, 25)), new ECBlocks$1(30, new ECB$1(10, 15), new ECB$1(67, 16))),
        new Version$1(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new ECBlocks$1(30, new ECB$1(19, 118), new ECB$1(6, 119)), new ECBlocks$1(28, new ECB$1(18, 47), new ECB$1(31, 48)), new ECBlocks$1(30, new ECB$1(34, 24), new ECB$1(34, 25)), new ECBlocks$1(30, new ECB$1(20, 15), new ECB$1(61, 16)))
    ];

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var DataMaskValues;
    (function (DataMaskValues) {
        DataMaskValues[DataMaskValues["DATA_MASK_000"] = 0] = "DATA_MASK_000";
        DataMaskValues[DataMaskValues["DATA_MASK_001"] = 1] = "DATA_MASK_001";
        DataMaskValues[DataMaskValues["DATA_MASK_010"] = 2] = "DATA_MASK_010";
        DataMaskValues[DataMaskValues["DATA_MASK_011"] = 3] = "DATA_MASK_011";
        DataMaskValues[DataMaskValues["DATA_MASK_100"] = 4] = "DATA_MASK_100";
        DataMaskValues[DataMaskValues["DATA_MASK_101"] = 5] = "DATA_MASK_101";
        DataMaskValues[DataMaskValues["DATA_MASK_110"] = 6] = "DATA_MASK_110";
        DataMaskValues[DataMaskValues["DATA_MASK_111"] = 7] = "DATA_MASK_111";
    })(DataMaskValues || (DataMaskValues = {}));
    /**
     * <p>Encapsulates data masks for the data bits in a QR code, per ISO 18004:2006 6.8. Implementations
     * of this class can un-mask a raw BitMatrix. For simplicity, they will unmask the entire BitMatrix,
     * including areas used for finder patterns, timing patterns, etc. These areas should be unused
     * after the point they are unmasked anyway.</p>
     *
     * <p>Note that the diagram in section 6.8.1 is misleading since it indicates that i is column position
     * and j is row position. In fact, as the text says, i is row position and j is column position.</p>
     *
     * @author Sean Owen
     */
    class DataMask {
        // See ISO 18004:2006 6.8.1
        constructor(value, isMasked) {
            this.value = value;
            this.isMasked = isMasked;
        }
        // End of enum constants.
        /**
         * <p>Implementations of this method reverse the data masking process applied to a QR Code and
         * make its bits ready to read.</p>
         *
         * @param bits representation of QR Code bits
         * @param dimension dimension of QR Code, represented by bits, being unmasked
         */
        unmaskBitMatrix(bits, dimension /*int*/) {
            for (let i = 0; i < dimension; i++) {
                for (let j = 0; j < dimension; j++) {
                    if (this.isMasked(i, j)) {
                        bits.flip(j, i);
                    }
                }
            }
        }
    }
    DataMask.values = new Map([
        /**
         * 000: mask bits for which (x + y) mod 2 == 0
         */
        [DataMaskValues.DATA_MASK_000, new DataMask(DataMaskValues.DATA_MASK_000, (i /*int*/, j /*int*/) => { return ((i + j) & 0x01) === 0; })],
        /**
         * 001: mask bits for which x mod 2 == 0
         */
        [DataMaskValues.DATA_MASK_001, new DataMask(DataMaskValues.DATA_MASK_001, (i /*int*/, j /*int*/) => { return (i & 0x01) === 0; })],
        /**
         * 010: mask bits for which y mod 3 == 0
         */
        [DataMaskValues.DATA_MASK_010, new DataMask(DataMaskValues.DATA_MASK_010, (i /*int*/, j /*int*/) => { return j % 3 === 0; })],
        /**
         * 011: mask bits for which (x + y) mod 3 == 0
         */
        [DataMaskValues.DATA_MASK_011, new DataMask(DataMaskValues.DATA_MASK_011, (i /*int*/, j /*int*/) => { return (i + j) % 3 === 0; })],
        /**
         * 100: mask bits for which (x/2 + y/3) mod 2 == 0
         */
        [DataMaskValues.DATA_MASK_100, new DataMask(DataMaskValues.DATA_MASK_100, (i /*int*/, j /*int*/) => { return ((Math.floor(i / 2) + Math.floor(j / 3)) & 0x01) === 0; })],
        /**
         * 101: mask bits for which xy mod 2 + xy mod 3 == 0
         * equivalently, such that xy mod 6 == 0
         */
        [DataMaskValues.DATA_MASK_101, new DataMask(DataMaskValues.DATA_MASK_101, (i /*int*/, j /*int*/) => { return (i * j) % 6 === 0; })],
        /**
         * 110: mask bits for which (xy mod 2 + xy mod 3) mod 2 == 0
         * equivalently, such that xy mod 6 < 3
         */
        [DataMaskValues.DATA_MASK_110, new DataMask(DataMaskValues.DATA_MASK_110, (i /*int*/, j /*int*/) => { return ((i * j) % 6) < 3; })],
        /**
         * 111: mask bits for which ((x+y)mod 2 + xy mod 3) mod 2 == 0
         * equivalently, such that (x + y + xy mod 3) mod 2 == 0
         */
        [DataMaskValues.DATA_MASK_111, new DataMask(DataMaskValues.DATA_MASK_111, (i /*int*/, j /*int*/) => { return ((i + j + ((i * j) % 3)) & 0x01) === 0; })],
    ]);

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @author Sean Owen
     */
    class BitMatrixParser {
        /**
         * @param bitMatrix {@link BitMatrix} to parse
         * @throws FormatException if dimension is not >= 21 and 1 mod 4
         */
        constructor(bitMatrix) {
            const dimension = bitMatrix.getHeight();
            if (dimension < 21 || (dimension & 0x03) !== 1) {
                throw new FormatException();
            }
            this.bitMatrix = bitMatrix;
        }
        /**
         * <p>Reads format information from one of its two locations within the QR Code.</p>
         *
         * @return {@link FormatInformation} encapsulating the QR Code's format info
         * @throws FormatException if both format information locations cannot be parsed as
         * the valid encoding of format information
         */
        readFormatInformation() {
            if (this.parsedFormatInfo !== null && this.parsedFormatInfo !== undefined) {
                return this.parsedFormatInfo;
            }
            // Read top-left format info bits
            let formatInfoBits1 = 0;
            for (let i = 0; i < 6; i++) {
                formatInfoBits1 = this.copyBit(i, 8, formatInfoBits1);
            }
            // .. and skip a bit in the timing pattern ...
            formatInfoBits1 = this.copyBit(7, 8, formatInfoBits1);
            formatInfoBits1 = this.copyBit(8, 8, formatInfoBits1);
            formatInfoBits1 = this.copyBit(8, 7, formatInfoBits1);
            // .. and skip a bit in the timing pattern ...
            for (let j = 5; j >= 0; j--) {
                formatInfoBits1 = this.copyBit(8, j, formatInfoBits1);
            }
            // Read the top-right/bottom-left pattern too
            const dimension = this.bitMatrix.getHeight();
            let formatInfoBits2 = 0;
            const jMin = dimension - 7;
            for (let j = dimension - 1; j >= jMin; j--) {
                formatInfoBits2 = this.copyBit(8, j, formatInfoBits2);
            }
            for (let i = dimension - 8; i < dimension; i++) {
                formatInfoBits2 = this.copyBit(i, 8, formatInfoBits2);
            }
            this.parsedFormatInfo = FormatInformation.decodeFormatInformation(formatInfoBits1, formatInfoBits2);
            if (this.parsedFormatInfo !== null) {
                return this.parsedFormatInfo;
            }
            throw new FormatException();
        }
        /**
         * <p>Reads version information from one of its two locations within the QR Code.</p>
         *
         * @return {@link Version} encapsulating the QR Code's version
         * @throws FormatException if both version information locations cannot be parsed as
         * the valid encoding of version information
         */
        readVersion() {
            if (this.parsedVersion !== null && this.parsedVersion !== undefined) {
                return this.parsedVersion;
            }
            const dimension = this.bitMatrix.getHeight();
            const provisionalVersion = Math.floor((dimension - 17) / 4);
            if (provisionalVersion <= 6) {
                return Version$1.getVersionForNumber(provisionalVersion);
            }
            // Read top-right version info: 3 wide by 6 tall
            let versionBits = 0;
            const ijMin = dimension - 11;
            for (let j = 5; j >= 0; j--) {
                for (let i = dimension - 9; i >= ijMin; i--) {
                    versionBits = this.copyBit(i, j, versionBits);
                }
            }
            let theParsedVersion = Version$1.decodeVersionInformation(versionBits);
            if (theParsedVersion !== null && theParsedVersion.getDimensionForVersion() === dimension) {
                this.parsedVersion = theParsedVersion;
                return theParsedVersion;
            }
            // Hmm, failed. Try bottom left: 6 wide by 3 tall
            versionBits = 0;
            for (let i = 5; i >= 0; i--) {
                for (let j = dimension - 9; j >= ijMin; j--) {
                    versionBits = this.copyBit(i, j, versionBits);
                }
            }
            theParsedVersion = Version$1.decodeVersionInformation(versionBits);
            if (theParsedVersion !== null && theParsedVersion.getDimensionForVersion() === dimension) {
                this.parsedVersion = theParsedVersion;
                return theParsedVersion;
            }
            throw new FormatException();
        }
        copyBit(i /*int*/, j /*int*/, versionBits /*int*/) {
            const bit = this.isMirror ? this.bitMatrix.get(j, i) : this.bitMatrix.get(i, j);
            return bit ? (versionBits << 1) | 0x1 : versionBits << 1;
        }
        /**
         * <p>Reads the bits in the {@link BitMatrix} representing the finder pattern in the
         * correct order in order to reconstruct the codewords bytes contained within the
         * QR Code.</p>
         *
         * @return bytes encoded within the QR Code
         * @throws FormatException if the exact number of bytes expected is not read
         */
        readCodewords() {
            const formatInfo = this.readFormatInformation();
            const version = this.readVersion();
            // Get the data mask for the format used in this QR Code. This will exclude
            // some bits from reading as we wind through the bit matrix.
            const dataMask = DataMask.values.get(formatInfo.getDataMask());
            const dimension = this.bitMatrix.getHeight();
            dataMask.unmaskBitMatrix(this.bitMatrix, dimension);
            const functionPattern = version.buildFunctionPattern();
            let readingUp = true;
            const result = new Uint8Array(version.getTotalCodewords());
            let resultOffset = 0;
            let currentByte = 0;
            let bitsRead = 0;
            // Read columns in pairs, from right to left
            for (let j = dimension - 1; j > 0; j -= 2) {
                if (j === 6) {
                    // Skip whole column with vertical alignment pattern
                    // saves time and makes the other code proceed more cleanly
                    j--;
                }
                // Read alternatingly from bottom to top then top to bottom
                for (let count = 0; count < dimension; count++) {
                    const i = readingUp ? dimension - 1 - count : count;
                    for (let col = 0; col < 2; col++) {
                        // Ignore bits covered by the function pattern
                        if (!functionPattern.get(j - col, i)) {
                            // Read a bit
                            bitsRead++;
                            currentByte <<= 1;
                            if (this.bitMatrix.get(j - col, i)) {
                                currentByte |= 1;
                            }
                            // If we've made a whole byte, save it off
                            if (bitsRead === 8) {
                                result[resultOffset++] = /*(byte) */ currentByte;
                                bitsRead = 0;
                                currentByte = 0;
                            }
                        }
                    }
                }
                readingUp = !readingUp; // readingUp ^= true; // readingUp = !readingUp; // switch directions
            }
            if (resultOffset !== version.getTotalCodewords()) {
                throw new FormatException();
            }
            return result;
        }
        /**
         * Revert the mask removal done while reading the code words. The bit matrix should revert to its original state.
         */
        remask() {
            if (this.parsedFormatInfo === null) {
                return; // We have no format information, and have no data mask
            }
            const dataMask = DataMask.values[this.parsedFormatInfo.getDataMask()];
            const dimension = this.bitMatrix.getHeight();
            dataMask.unmaskBitMatrix(this.bitMatrix, dimension);
        }
        /**
         * Prepare the parser for a mirrored operation.
         * This flag has effect only on the {@link #readFormatInformation()} and the
         * {@link #readVersion()}. Before proceeding with {@link #readCodewords()} the
         * {@link #mirror()} method should be called.
         *
         * @param mirror Whether to read version and format information mirrored.
         */
        setMirror(isMirror) {
            this.parsedVersion = null;
            this.parsedFormatInfo = null;
            this.isMirror = isMirror;
        }
        /** Mirror the bit matrix in order to attempt a second reading. */
        mirror() {
            const bitMatrix = this.bitMatrix;
            for (let x = 0, width = bitMatrix.getWidth(); x < width; x++) {
                for (let y = x + 1, height = bitMatrix.getHeight(); y < height; y++) {
                    if (bitMatrix.get(x, y) !== bitMatrix.get(y, x)) {
                        bitMatrix.flip(y, x);
                        bitMatrix.flip(x, y);
                    }
                }
            }
        }
    }

    /*
     * Copyright 2013 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Meta-data container for QR Code decoding. Instances of this class may be used to convey information back to the
     * decoding caller. Callers are expected to process this.
     *
     * @see com.google.zxing.common.DecoderResult#getOther()
     */
    class QRCodeDecoderMetaData {
        constructor(mirrored) {
            this.mirrored = mirrored;
        }
        /**
         * @return true if the QR Code was mirrored.
         */
        isMirrored() {
            return this.mirrored;
        }
        /**
         * Apply the result points' order correction due to mirroring.
         *
         * @param points Array of points to apply mirror correction to.
         */
        applyMirroredCorrection(points) {
            if (!this.mirrored || points === null || points.length < 3) {
                return;
            }
            const bottomLeft = points[0];
            points[0] = points[2];
            points[2] = bottomLeft;
            // No need to 'fix' top-left and alignment pattern.
        }
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * <p>Encapsulates a block of data within a QR Code. QR Codes may split their data into
     * multiple blocks, each of which is a unit of data and error-correction codewords. Each
     * is represented by an instance of this class.</p>
     *
     * @author Sean Owen
     */
    class DataBlock {
        constructor(numDataCodewords /*int*/, codewords) {
            this.numDataCodewords = numDataCodewords;
            this.codewords = codewords;
        }
        /**
         * <p>When QR Codes use multiple data blocks, they are actually interleaved.
         * That is, the first byte of data block 1 to n is written, then the second bytes, and so on. This
         * method will separate the data into original blocks.</p>
         *
         * @param rawCodewords bytes as read directly from the QR Code
         * @param version version of the QR Code
         * @param ecLevel error-correction level of the QR Code
         * @return DataBlocks containing original bytes, "de-interleaved" from representation in the
         *         QR Code
         */
        static getDataBlocks(rawCodewords, version, ecLevel) {
            if (rawCodewords.length !== version.getTotalCodewords()) {
                throw new IllegalArgumentException();
            }
            // Figure out the number and size of data blocks used by this version and
            // error correction level
            const ecBlocks = version.getECBlocksForLevel(ecLevel);
            // First count the total number of data blocks
            let totalBlocks = 0;
            const ecBlockArray = ecBlocks.getECBlocks();
            for (const ecBlock of ecBlockArray) {
                totalBlocks += ecBlock.getCount();
            }
            // Now establish DataBlocks of the appropriate size and number of data codewords
            const result = new Array(totalBlocks);
            let numResultBlocks = 0;
            for (const ecBlock of ecBlockArray) {
                for (let i = 0; i < ecBlock.getCount(); i++) {
                    const numDataCodewords = ecBlock.getDataCodewords();
                    const numBlockCodewords = ecBlocks.getECCodewordsPerBlock() + numDataCodewords;
                    result[numResultBlocks++] = new DataBlock(numDataCodewords, new Uint8Array(numBlockCodewords));
                }
            }
            // All blocks have the same amount of data, except that the last n
            // (where n may be 0) have 1 more byte. Figure out where these start.
            const shorterBlocksTotalCodewords = result[0].codewords.length;
            let longerBlocksStartAt = result.length - 1;
            // TYPESCRIPTPORT: check length is correct here
            while (longerBlocksStartAt >= 0) {
                const numCodewords = result[longerBlocksStartAt].codewords.length;
                if (numCodewords === shorterBlocksTotalCodewords) {
                    break;
                }
                longerBlocksStartAt--;
            }
            longerBlocksStartAt++;
            const shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - ecBlocks.getECCodewordsPerBlock();
            // The last elements of result may be 1 element longer
            // first fill out as many elements as all of them have
            let rawCodewordsOffset = 0;
            for (let i = 0; i < shorterBlocksNumDataCodewords; i++) {
                for (let j = 0; j < numResultBlocks; j++) {
                    result[j].codewords[i] = rawCodewords[rawCodewordsOffset++];
                }
            }
            // Fill out the last data block in the longer ones
            for (let j = longerBlocksStartAt; j < numResultBlocks; j++) {
                result[j].codewords[shorterBlocksNumDataCodewords] = rawCodewords[rawCodewordsOffset++];
            }
            // Now add in error correction blocks
            const max = result[0].codewords.length;
            for (let i = shorterBlocksNumDataCodewords; i < max; i++) {
                for (let j = 0; j < numResultBlocks; j++) {
                    const iOffset = j < longerBlocksStartAt ? i : i + 1;
                    result[j].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
                }
            }
            return result;
        }
        getNumDataCodewords() {
            return this.numDataCodewords;
        }
        getCodewords() {
            return this.codewords;
        }
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var ModeValues;
    (function (ModeValues) {
        ModeValues[ModeValues["TERMINATOR"] = 0] = "TERMINATOR";
        ModeValues[ModeValues["NUMERIC"] = 1] = "NUMERIC";
        ModeValues[ModeValues["ALPHANUMERIC"] = 2] = "ALPHANUMERIC";
        ModeValues[ModeValues["STRUCTURED_APPEND"] = 3] = "STRUCTURED_APPEND";
        ModeValues[ModeValues["BYTE"] = 4] = "BYTE";
        ModeValues[ModeValues["ECI"] = 5] = "ECI";
        ModeValues[ModeValues["KANJI"] = 6] = "KANJI";
        ModeValues[ModeValues["FNC1_FIRST_POSITION"] = 7] = "FNC1_FIRST_POSITION";
        ModeValues[ModeValues["FNC1_SECOND_POSITION"] = 8] = "FNC1_SECOND_POSITION";
        /** See GBT 18284-2000; "Hanzi" is a transliteration of this mode name. */
        ModeValues[ModeValues["HANZI"] = 9] = "HANZI";
    })(ModeValues || (ModeValues = {}));
    /**
     * <p>See ISO 18004:2006, 6.4.1, Tables 2 and 3. This enum encapsulates the various modes in which
     * data can be encoded to bits in the QR code standard.</p>
     *
     * @author Sean Owen
     */
    class Mode$1 {
        constructor(value, stringValue, characterCountBitsForVersions, bits /*int*/) {
            this.value = value;
            this.stringValue = stringValue;
            this.characterCountBitsForVersions = characterCountBitsForVersions;
            this.bits = bits;
            Mode$1.FOR_BITS.set(bits, this);
            Mode$1.FOR_VALUE.set(value, this);
        }
        /**
         * @param bits four bits encoding a QR Code data mode
         * @return Mode encoded by these bits
         * @throws IllegalArgumentException if bits do not correspond to a known mode
         */
        static forBits(bits /*int*/) {
            const mode = Mode$1.FOR_BITS.get(bits);
            if (undefined === mode) {
                throw new IllegalArgumentException();
            }
            return mode;
        }
        /**
         * @param version version in question
         * @return number of bits used, in this QR Code symbol {@link Version}, to encode the
         *         count of characters that will follow encoded in this Mode
         */
        getCharacterCountBits(version) {
            const versionNumber = version.getVersionNumber();
            let offset;
            if (versionNumber <= 9) {
                offset = 0;
            }
            else if (versionNumber <= 26) {
                offset = 1;
            }
            else {
                offset = 2;
            }
            return this.characterCountBitsForVersions[offset];
        }
        getValue() {
            return this.value;
        }
        getBits() {
            return this.bits;
        }
        equals(o) {
            if (!(o instanceof Mode$1)) {
                return false;
            }
            const other = o;
            return this.value === other.value;
        }
        toString() {
            return this.stringValue;
        }
    }
    Mode$1.FOR_BITS = new Map();
    Mode$1.FOR_VALUE = new Map();
    Mode$1.TERMINATOR = new Mode$1(ModeValues.TERMINATOR, 'TERMINATOR', Int32Array.from([0, 0, 0]), 0x00); // Not really a mode...
    Mode$1.NUMERIC = new Mode$1(ModeValues.NUMERIC, 'NUMERIC', Int32Array.from([10, 12, 14]), 0x01);
    Mode$1.ALPHANUMERIC = new Mode$1(ModeValues.ALPHANUMERIC, 'ALPHANUMERIC', Int32Array.from([9, 11, 13]), 0x02);
    Mode$1.STRUCTURED_APPEND = new Mode$1(ModeValues.STRUCTURED_APPEND, 'STRUCTURED_APPEND', Int32Array.from([0, 0, 0]), 0x03); // Not supported
    Mode$1.BYTE = new Mode$1(ModeValues.BYTE, 'BYTE', Int32Array.from([8, 16, 16]), 0x04);
    Mode$1.ECI = new Mode$1(ModeValues.ECI, 'ECI', Int32Array.from([0, 0, 0]), 0x07); // character counts don't apply
    Mode$1.KANJI = new Mode$1(ModeValues.KANJI, 'KANJI', Int32Array.from([8, 10, 12]), 0x08);
    Mode$1.FNC1_FIRST_POSITION = new Mode$1(ModeValues.FNC1_FIRST_POSITION, 'FNC1_FIRST_POSITION', Int32Array.from([0, 0, 0]), 0x05);
    Mode$1.FNC1_SECOND_POSITION = new Mode$1(ModeValues.FNC1_SECOND_POSITION, 'FNC1_SECOND_POSITION', Int32Array.from([0, 0, 0]), 0x09);
    /** See GBT 18284-2000; "Hanzi" is a transliteration of this mode name. */
    Mode$1.HANZI = new Mode$1(ModeValues.HANZI, 'HANZI', Int32Array.from([8, 10, 12]), 0x0D);

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /*import java.io.UnsupportedEncodingException;*/
    /*import java.util.ArrayList;*/
    /*import java.util.Collection;*/
    /*import java.util.List;*/
    /*import java.util.Map;*/
    /**
     * <p>QR Codes can encode text as bits in one of several modes, and can use multiple modes
     * in one QR Code. This class decodes the bits back into text.</p>
     *
     * <p>See ISO 18004:2006, 6.4.3 - 6.4.7</p>
     *
     * @author Sean Owen
     */
    class DecodedBitStreamParser {
        static decode(bytes, version, ecLevel, hints) {
            const bits = new BitSource(bytes);
            let result = new StringBuilder();
            const byteSegments = new Array(); // 1
            // TYPESCRIPTPORT: I do not use constructor with size 1 as in original Java means capacity and the array length is checked below
            let symbolSequence = -1;
            let parityData = -1;
            try {
                let currentCharacterSetECI = null;
                let fc1InEffect = false;
                let mode;
                do {
                    // While still another segment to read...
                    if (bits.available() < 4) {
                        // OK, assume we're done. Really, a TERMINATOR mode should have been recorded here
                        mode = Mode$1.TERMINATOR;
                    }
                    else {
                        const modeBits = bits.readBits(4);
                        mode = Mode$1.forBits(modeBits); // mode is encoded by 4 bits
                    }
                    switch (mode) {
                        case Mode$1.TERMINATOR:
                            break;
                        case Mode$1.FNC1_FIRST_POSITION:
                        case Mode$1.FNC1_SECOND_POSITION:
                            // We do little with FNC1 except alter the parsed result a bit according to the spec
                            fc1InEffect = true;
                            break;
                        case Mode$1.STRUCTURED_APPEND:
                            if (bits.available() < 16) {
                                throw new FormatException();
                            }
                            // sequence number and parity is added later to the result metadata
                            // Read next 8 bits (symbol sequence #) and 8 bits (data: parity), then continue
                            symbolSequence = bits.readBits(8);
                            parityData = bits.readBits(8);
                            break;
                        case Mode$1.ECI:
                            // Count doesn't apply to ECI
                            const value = DecodedBitStreamParser.parseECIValue(bits);
                            currentCharacterSetECI = CharacterSetECI.getCharacterSetECIByValue(value);
                            if (currentCharacterSetECI === null) {
                                throw new FormatException();
                            }
                            break;
                        case Mode$1.HANZI:
                            // First handle Hanzi mode which does not start with character count
                            // Chinese mode contains a sub set indicator right after mode indicator
                            const subset = bits.readBits(4);
                            const countHanzi = bits.readBits(mode.getCharacterCountBits(version));
                            if (subset === DecodedBitStreamParser.GB2312_SUBSET) {
                                DecodedBitStreamParser.decodeHanziSegment(bits, result, countHanzi);
                            }
                            break;
                        default:
                            // "Normal" QR code modes:
                            // How many characters will follow, encoded in this mode?
                            const count = bits.readBits(mode.getCharacterCountBits(version));
                            switch (mode) {
                                case Mode$1.NUMERIC:
                                    DecodedBitStreamParser.decodeNumericSegment(bits, result, count);
                                    break;
                                case Mode$1.ALPHANUMERIC:
                                    DecodedBitStreamParser.decodeAlphanumericSegment(bits, result, count, fc1InEffect);
                                    break;
                                case Mode$1.BYTE:
                                    DecodedBitStreamParser.decodeByteSegment(bits, result, count, currentCharacterSetECI, byteSegments, hints);
                                    break;
                                case Mode$1.KANJI:
                                    DecodedBitStreamParser.decodeKanjiSegment(bits, result, count);
                                    break;
                                default:
                                    throw new FormatException();
                            }
                            break;
                    }
                } while (mode !== Mode$1.TERMINATOR);
            }
            catch (iae /*: IllegalArgumentException*/) {
                // from readBits() calls
                throw new FormatException();
            }
            return new DecoderResult(bytes, result.toString(), byteSegments.length === 0 ? null : byteSegments, ecLevel === null ? null : ecLevel.toString(), symbolSequence, parityData);
        }
        /**
         * See specification GBT 18284-2000
         */
        static decodeHanziSegment(bits, result, count /*int*/) {
            // Don't crash trying to read more bits than we have available.
            if (count * 13 > bits.available()) {
                throw new FormatException();
            }
            // Each character will require 2 bytes. Read the characters as 2-byte pairs
            // and decode as GB2312 afterwards
            const buffer = new Uint8Array(2 * count);
            let offset = 0;
            while (count > 0) {
                // Each 13 bits encodes a 2-byte character
                const twoBytes = bits.readBits(13);
                let assembledTwoBytes = (((twoBytes / 0x060) << 8) & 0xFFFFFFFF) | (twoBytes % 0x060);
                if (assembledTwoBytes < 0x003BF) {
                    // In the 0xA1A1 to 0xAAFE range
                    assembledTwoBytes += 0x0A1A1;
                }
                else {
                    // In the 0xB0A1 to 0xFAFE range
                    assembledTwoBytes += 0x0A6A1;
                }
                buffer[offset] = /*(byte) */ ((assembledTwoBytes >> 8) & 0xFF);
                buffer[offset + 1] = /*(byte) */ (assembledTwoBytes & 0xFF);
                offset += 2;
                count--;
            }
            try {
                result.append(StringEncoding.decode(buffer, StringUtils.GB2312));
                // TYPESCRIPTPORT: TODO: implement GB2312 decode. StringView from MDN could be a starting point
            }
            catch (ignored /*: UnsupportedEncodingException*/) {
                throw new FormatException(ignored);
            }
        }
        static decodeKanjiSegment(bits, result, count /*int*/) {
            // Don't crash trying to read more bits than we have available.
            if (count * 13 > bits.available()) {
                throw new FormatException();
            }
            // Each character will require 2 bytes. Read the characters as 2-byte pairs
            // and decode as Shift_JIS afterwards
            const buffer = new Uint8Array(2 * count);
            let offset = 0;
            while (count > 0) {
                // Each 13 bits encodes a 2-byte character
                const twoBytes = bits.readBits(13);
                let assembledTwoBytes = (((twoBytes / 0x0C0) << 8) & 0xFFFFFFFF) | (twoBytes % 0x0C0);
                if (assembledTwoBytes < 0x01F00) {
                    // In the 0x8140 to 0x9FFC range
                    assembledTwoBytes += 0x08140;
                }
                else {
                    // In the 0xE040 to 0xEBBF range
                    assembledTwoBytes += 0x0C140;
                }
                buffer[offset] = /*(byte) */ (assembledTwoBytes >> 8);
                buffer[offset + 1] = /*(byte) */ assembledTwoBytes;
                offset += 2;
                count--;
            }
            // Shift_JIS may not be supported in some environments:
            try {
                result.append(StringEncoding.decode(buffer, StringUtils.SHIFT_JIS));
                // TYPESCRIPTPORT: TODO: implement SHIFT_JIS decode. StringView from MDN could be a starting point
            }
            catch (ignored /*: UnsupportedEncodingException*/) {
                throw new FormatException(ignored);
            }
        }
        static decodeByteSegment(bits, result, count /*int*/, currentCharacterSetECI, byteSegments, hints) {
            // Don't crash trying to read more bits than we have available.
            if (8 * count > bits.available()) {
                throw new FormatException();
            }
            const readBytes = new Uint8Array(count);
            for (let i = 0; i < count; i++) {
                readBytes[i] = /*(byte) */ bits.readBits(8);
            }
            let encoding;
            if (currentCharacterSetECI === null) {
                // The spec isn't clear on this mode; see
                // section 6.4.5: t does not say which encoding to assuming
                // upon decoding. I have seen ISO-8859-1 used as well as
                // Shift_JIS -- without anything like an ECI designator to
                // give a hint.
                encoding = StringUtils.guessEncoding(readBytes, hints);
            }
            else {
                encoding = currentCharacterSetECI.getName();
            }
            try {
                result.append(StringEncoding.decode(readBytes, encoding));
            }
            catch (ignored /*: UnsupportedEncodingException*/) {
                throw new FormatException(ignored);
            }
            byteSegments.push(readBytes);
        }
        static toAlphaNumericChar(value /*int*/) {
            if (value >= DecodedBitStreamParser.ALPHANUMERIC_CHARS.length) {
                throw new FormatException();
            }
            return DecodedBitStreamParser.ALPHANUMERIC_CHARS[value];
        }
        static decodeAlphanumericSegment(bits, result, count /*int*/, fc1InEffect) {
            // Read two characters at a time
            const start = result.length();
            while (count > 1) {
                if (bits.available() < 11) {
                    throw new FormatException();
                }
                const nextTwoCharsBits = bits.readBits(11);
                result.append(DecodedBitStreamParser.toAlphaNumericChar(Math.floor(nextTwoCharsBits / 45)));
                result.append(DecodedBitStreamParser.toAlphaNumericChar(nextTwoCharsBits % 45));
                count -= 2;
            }
            if (count === 1) {
                // special case: one character left
                if (bits.available() < 6) {
                    throw new FormatException();
                }
                result.append(DecodedBitStreamParser.toAlphaNumericChar(bits.readBits(6)));
            }
            // See section 6.4.8.1, 6.4.8.2
            if (fc1InEffect) {
                // We need to massage the result a bit if in an FNC1 mode:
                for (let i = start; i < result.length(); i++) {
                    if (result.charAt(i) === '%') {
                        if (i < result.length() - 1 && result.charAt(i + 1) === '%') {
                            // %% is rendered as %
                            result.deleteCharAt(i + 1);
                        }
                        else {
                            // In alpha mode, % should be converted to FNC1 separator 0x1D
                            result.setCharAt(i, String.fromCharCode(0x1D));
                        }
                    }
                }
            }
        }
        static decodeNumericSegment(bits, result, count /*int*/) {
            // Read three digits at a time
            while (count >= 3) {
                // Each 10 bits encodes three digits
                if (bits.available() < 10) {
                    throw new FormatException();
                }
                const threeDigitsBits = bits.readBits(10);
                if (threeDigitsBits >= 1000) {
                    throw new FormatException();
                }
                result.append(DecodedBitStreamParser.toAlphaNumericChar(Math.floor(threeDigitsBits / 100)));
                result.append(DecodedBitStreamParser.toAlphaNumericChar(Math.floor(threeDigitsBits / 10) % 10));
                result.append(DecodedBitStreamParser.toAlphaNumericChar(threeDigitsBits % 10));
                count -= 3;
            }
            if (count === 2) {
                // Two digits left over to read, encoded in 7 bits
                if (bits.available() < 7) {
                    throw new FormatException();
                }
                const twoDigitsBits = bits.readBits(7);
                if (twoDigitsBits >= 100) {
                    throw new FormatException();
                }
                result.append(DecodedBitStreamParser.toAlphaNumericChar(Math.floor(twoDigitsBits / 10)));
                result.append(DecodedBitStreamParser.toAlphaNumericChar(twoDigitsBits % 10));
            }
            else if (count === 1) {
                // One digit left over to read
                if (bits.available() < 4) {
                    throw new FormatException();
                }
                const digitBits = bits.readBits(4);
                if (digitBits >= 10) {
                    throw new FormatException();
                }
                result.append(DecodedBitStreamParser.toAlphaNumericChar(digitBits));
            }
        }
        static parseECIValue(bits) {
            const firstByte = bits.readBits(8);
            if ((firstByte & 0x80) === 0) {
                // just one byte
                return firstByte & 0x7F;
            }
            if ((firstByte & 0xC0) === 0x80) {
                // two bytes
                const secondByte = bits.readBits(8);
                return (((firstByte & 0x3F) << 8) & 0xFFFFFFFF) | secondByte;
            }
            if ((firstByte & 0xE0) === 0xC0) {
                // three bytes
                const secondThirdBytes = bits.readBits(16);
                return (((firstByte & 0x1F) << 16) & 0xFFFFFFFF) | secondThirdBytes;
            }
            throw new FormatException();
        }
    }
    /**
     * See ISO 18004:2006, 6.4.4 Table 5
     */
    DecodedBitStreamParser.ALPHANUMERIC_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:';
    DecodedBitStreamParser.GB2312_SUBSET = 1;

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /*import java.util.Map;*/
    /**
     * <p>The main class which implements QR Code decoding -- as opposed to locating and extracting
     * the QR Code from an image.</p>
     *
     * @author Sean Owen
     */
    class Decoder {
        constructor() {
            this.rsDecoder = new ReedSolomonDecoder(GenericGF.QR_CODE_FIELD_256);
        }
        // public decode(image: boolean[][]): DecoderResult /*throws ChecksumException, FormatException*/ {
        //   return decode(image, null)
        // }
        /**
         * <p>Convenience method that can decode a QR Code represented as a 2D array of booleans.
         * "true" is taken to mean a black module.</p>
         *
         * @param image booleans representing white/black QR Code modules
         * @param hints decoding hints that should be used to influence decoding
         * @return text and bytes encoded within the QR Code
         * @throws FormatException if the QR Code cannot be decoded
         * @throws ChecksumException if error correction fails
         */
        decodeBooleanArray(image, hints) {
            return this.decodeBitMatrix(BitMatrix.parseFromBooleanArray(image), hints);
        }
        // public decodeBitMatrix(bits: BitMatrix): DecoderResult /*throws ChecksumException, FormatException*/ {
        //   return decode(bits, null)
        // }
        /**
         * <p>Decodes a QR Code represented as a {@link BitMatrix}. A 1 or "true" is taken to mean a black module.</p>
         *
         * @param bits booleans representing white/black QR Code modules
         * @param hints decoding hints that should be used to influence decoding
         * @return text and bytes encoded within the QR Code
         * @throws FormatException if the QR Code cannot be decoded
         * @throws ChecksumException if error correction fails
         */
        decodeBitMatrix(bits, hints) {
            // Construct a parser and read version, error-correction level
            const parser = new BitMatrixParser(bits);
            let ex = null;
            try {
                return this.decodeBitMatrixParser(parser, hints);
            }
            catch (e /*: FormatException, ChecksumException*/) {
                ex = e;
            }
            try {
                // Revert the bit matrix
                parser.remask();
                // Will be attempting a mirrored reading of the version and format info.
                parser.setMirror(true);
                // Preemptively read the version.
                parser.readVersion();
                // Preemptively read the format information.
                parser.readFormatInformation();
                /*
                 * Since we're here, this means we have successfully detected some kind
                 * of version and format information when mirrored. This is a good sign,
                 * that the QR code may be mirrored, and we should try once more with a
                 * mirrored content.
                 */
                // Prepare for a mirrored reading.
                parser.mirror();
                const result = this.decodeBitMatrixParser(parser, hints);
                // Success! Notify the caller that the code was mirrored.
                result.setOther(new QRCodeDecoderMetaData(true));
                return result;
            }
            catch (e /*FormatException | ChecksumException*/) {
                // Throw the exception from the original reading
                if (ex !== null) {
                    throw ex;
                }
                throw e;
            }
        }
        decodeBitMatrixParser(parser, hints) {
            const version = parser.readVersion();
            const ecLevel = parser.readFormatInformation().getErrorCorrectionLevel();
            // Read codewords
            const codewords = parser.readCodewords();
            // Separate into data blocks
            const dataBlocks = DataBlock.getDataBlocks(codewords, version, ecLevel);
            // Count total number of data bytes
            let totalBytes = 0;
            for (const dataBlock of dataBlocks) {
                totalBytes += dataBlock.getNumDataCodewords();
            }
            const resultBytes = new Uint8Array(totalBytes);
            let resultOffset = 0;
            // Error-correct and copy data blocks together into a stream of bytes
            for (const dataBlock of dataBlocks) {
                const codewordBytes = dataBlock.getCodewords();
                const numDataCodewords = dataBlock.getNumDataCodewords();
                this.correctErrors(codewordBytes, numDataCodewords);
                for (let i = 0; i < numDataCodewords; i++) {
                    resultBytes[resultOffset++] = codewordBytes[i];
                }
            }
            // Decode the contents of that stream of bytes
            return DecodedBitStreamParser.decode(resultBytes, version, ecLevel, hints);
        }
        /**
         * <p>Given data and error-correction codewords received, possibly corrupted by errors, attempts to
         * correct the errors in-place using Reed-Solomon error correction.</p>
         *
         * @param codewordBytes data and error correction codewords
         * @param numDataCodewords number of codewords that are data bytes
         * @throws ChecksumException if error correction fails
         */
        correctErrors(codewordBytes, numDataCodewords /*int*/) {
            const numCodewords = codewordBytes.length;
            // First read into an array of ints
            const codewordsInts = new Int32Array(codewordBytes);
            // TYPESCRIPTPORT: not realy necessary to transform to ints? could redesign everything to work with unsigned bytes?
            // const codewordsInts = new Int32Array(numCodewords)
            // for (let i = 0; i < numCodewords; i++) {
            //   codewordsInts[i] = codewordBytes[i] & 0xFF
            // }
            try {
                this.rsDecoder.decode(codewordsInts, codewordBytes.length - numDataCodewords);
            }
            catch (ignored /*: ReedSolomonException*/) {
                throw new ChecksumException();
            }
            // Copy back into array of bytes -- only need to worry about the bytes that were data
            // We don't care about errors in the error-correction codewords
            for (let i = 0; i < numDataCodewords; i++) {
                codewordBytes[i] = /*(byte) */ codewordsInts[i];
            }
        }
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * <p>Encapsulates a finder pattern, which are the three square patterns found in
     * the corners of QR Codes. It also encapsulates a count of similar finder patterns,
     * as a convenience to the finder's bookkeeping.</p>
     *
     * @author Sean Owen
     */
    class FinderPattern extends ResultPoint {
        // FinderPattern(posX: number/*float*/, posY: number/*float*/, estimatedModuleSize: number/*float*/) {
        //   this(posX, posY, estimatedModuleSize, 1)
        // }
        constructor(posX /*float*/, posY /*float*/, estimatedModuleSize /*float*/, count /*int*/) {
            super(posX, posY);
            this.estimatedModuleSize = estimatedModuleSize;
            this.count = count;
            if (undefined === count) {
                this.count = 1;
            }
        }
        getEstimatedModuleSize() {
            return this.estimatedModuleSize;
        }
        getCount() {
            return this.count;
        }
        /*
        void incrementCount() {
          this.count++
        }
         */
        /**
         * <p>Determines if this finder pattern "about equals" a finder pattern at the stated
         * position and size -- meaning, it is at nearly the same center with nearly the same size.</p>
         */
        aboutEquals(moduleSize /*float*/, i /*float*/, j /*float*/) {
            if (Math.abs(i - this.getY()) <= moduleSize && Math.abs(j - this.getX()) <= moduleSize) {
                const moduleSizeDiff = Math.abs(moduleSize - this.estimatedModuleSize);
                return moduleSizeDiff <= 1.0 || moduleSizeDiff <= this.estimatedModuleSize;
            }
            return false;
        }
        /**
         * Combines this object's current estimate of a finder pattern position and module size
         * with a new estimate. It returns a new {@code FinderPattern} containing a weighted average
         * based on count.
         */
        combineEstimate(i /*float*/, j /*float*/, newModuleSize /*float*/) {
            const combinedCount = this.count + 1;
            const combinedX = (this.count * this.getX() + j) / combinedCount;
            const combinedY = (this.count * this.getY() + i) / combinedCount;
            const combinedModuleSize = (this.count * this.estimatedModuleSize + newModuleSize) / combinedCount;
            return new FinderPattern(combinedX, combinedY, combinedModuleSize, combinedCount);
        }
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * <p>Encapsulates information about finder patterns in an image, including the location of
     * the three finder patterns, and their estimated module size.</p>
     *
     * @author Sean Owen
     */
    class FinderPatternInfo {
        constructor(patternCenters) {
            this.bottomLeft = patternCenters[0];
            this.topLeft = patternCenters[1];
            this.topRight = patternCenters[2];
        }
        getBottomLeft() {
            return this.bottomLeft;
        }
        getTopLeft() {
            return this.topLeft;
        }
        getTopRight() {
            return this.topRight;
        }
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /*import java.io.Serializable;*/
    /*import java.util.ArrayList;*/
    /*import java.util.Collections;*/
    /*import java.util.Comparator;*/
    /*import java.util.List;*/
    /*import java.util.Map;*/
    /**
     * <p>This class attempts to find finder patterns in a QR Code. Finder patterns are the square
     * markers at three corners of a QR Code.</p>
     *
     * <p>This class is thread-safe but not reentrant. Each thread must allocate its own object.
     *
     * @author Sean Owen
     */
    class FinderPatternFinder {
        /**
         * <p>Creates a finder that will search the image for three finder patterns.</p>
         *
         * @param image image to search
         */
        // public constructor(image: BitMatrix) {
        //   this(image, null)
        // }
        constructor(image, resultPointCallback) {
            this.image = image;
            this.resultPointCallback = resultPointCallback;
            this.possibleCenters = [];
            this.crossCheckStateCount = new Int32Array(5);
            this.resultPointCallback = resultPointCallback;
        }
        getImage() {
            return this.image;
        }
        getPossibleCenters() {
            return this.possibleCenters;
        }
        find(hints) {
            const tryHarder = (hints !== null && hints !== undefined) && undefined !== hints.get(DecodeHintType$1.TRY_HARDER);
            const pureBarcode = (hints !== null && hints !== undefined) && undefined !== hints.get(DecodeHintType$1.PURE_BARCODE);
            const image = this.image;
            const maxI = image.getHeight();
            const maxJ = image.getWidth();
            // We are looking for black/white/black/white/black modules in
            // 1:1:3:1:1 ratio; this tracks the number of such modules seen so far
            // Let's assume that the maximum version QR Code we support takes up 1/4 the height of the
            // image, and then account for the center being 3 modules in size. This gives the smallest
            // number of pixels the center could be, so skip this often. When trying harder, look for all
            // QR versions regardless of how dense they are.
            let iSkip = Math.floor((3 * maxI) / (4 * FinderPatternFinder.MAX_MODULES));
            if (iSkip < FinderPatternFinder.MIN_SKIP || tryHarder) {
                iSkip = FinderPatternFinder.MIN_SKIP;
            }
            let done = false;
            const stateCount = new Int32Array(5);
            for (let i = iSkip - 1; i < maxI && !done; i += iSkip) {
                // Get a row of black/white values
                stateCount[0] = 0;
                stateCount[1] = 0;
                stateCount[2] = 0;
                stateCount[3] = 0;
                stateCount[4] = 0;
                let currentState = 0;
                for (let j = 0; j < maxJ; j++) {
                    if (image.get(j, i)) {
                        // Black pixel
                        if ((currentState & 1) === 1) { // Counting white pixels
                            currentState++;
                        }
                        stateCount[currentState]++;
                    }
                    else { // White pixel
                        if ((currentState & 1) === 0) { // Counting black pixels
                            if (currentState === 4) { // A winner?
                                if (FinderPatternFinder.foundPatternCross(stateCount)) { // Yes
                                    const confirmed = this.handlePossibleCenter(stateCount, i, j, pureBarcode);
                                    if (confirmed === true) {
                                        // Start examining every other line. Checking each line turned out to be too
                                        // expensive and didn't improve performance.
                                        iSkip = 2;
                                        if (this.hasSkipped === true) {
                                            done = this.haveMultiplyConfirmedCenters();
                                        }
                                        else {
                                            const rowSkip = this.findRowSkip();
                                            if (rowSkip > stateCount[2]) {
                                                // Skip rows between row of lower confirmed center
                                                // and top of presumed third confirmed center
                                                // but back up a bit to get a full chance of detecting
                                                // it, entire width of center of finder pattern
                                                // Skip by rowSkip, but back off by stateCount[2] (size of last center
                                                // of pattern we saw) to be conservative, and also back off by iSkip which
                                                // is about to be re-added
                                                i += rowSkip - stateCount[2] - iSkip;
                                                j = maxJ - 1;
                                            }
                                        }
                                    }
                                    else {
                                        stateCount[0] = stateCount[2];
                                        stateCount[1] = stateCount[3];
                                        stateCount[2] = stateCount[4];
                                        stateCount[3] = 1;
                                        stateCount[4] = 0;
                                        currentState = 3;
                                        continue;
                                    }
                                    // Clear state to start looking again
                                    currentState = 0;
                                    stateCount[0] = 0;
                                    stateCount[1] = 0;
                                    stateCount[2] = 0;
                                    stateCount[3] = 0;
                                    stateCount[4] = 0;
                                }
                                else { // No, shift counts back by two
                                    stateCount[0] = stateCount[2];
                                    stateCount[1] = stateCount[3];
                                    stateCount[2] = stateCount[4];
                                    stateCount[3] = 1;
                                    stateCount[4] = 0;
                                    currentState = 3;
                                }
                            }
                            else {
                                stateCount[++currentState]++;
                            }
                        }
                        else { // Counting white pixels
                            stateCount[currentState]++;
                        }
                    }
                }
                if (FinderPatternFinder.foundPatternCross(stateCount)) {
                    const confirmed = this.handlePossibleCenter(stateCount, i, maxJ, pureBarcode);
                    if (confirmed === true) {
                        iSkip = stateCount[0];
                        if (this.hasSkipped) {
                            // Found a third one
                            done = this.haveMultiplyConfirmedCenters();
                        }
                    }
                }
            }
            const patternInfo = this.selectBestPatterns();
            ResultPoint.orderBestPatterns(patternInfo);
            return new FinderPatternInfo(patternInfo);
        }
        /**
         * Given a count of black/white/black/white/black pixels just seen and an end position,
         * figures the location of the center of this run.
         */
        static centerFromEnd(stateCount, end /*int*/) {
            return (end - stateCount[4] - stateCount[3]) - stateCount[2] / 2.0;
        }
        /**
         * @param stateCount count of black/white/black/white/black pixels just read
         * @return true iff the proportions of the counts is close enough to the 1/1/3/1/1 ratios
         *         used by finder patterns to be considered a match
         */
        static foundPatternCross(stateCount) {
            let totalModuleSize = 0;
            for (let i = 0; i < 5; i++) {
                const count = stateCount[i];
                if (count === 0) {
                    return false;
                }
                totalModuleSize += count;
            }
            if (totalModuleSize < 7) {
                return false;
            }
            const moduleSize = totalModuleSize / 7.0;
            const maxVariance = moduleSize / 2.0;
            // Allow less than 50% variance from 1-1-3-1-1 proportions
            return Math.abs(moduleSize - stateCount[0]) < maxVariance &&
                Math.abs(moduleSize - stateCount[1]) < maxVariance &&
                Math.abs(3.0 * moduleSize - stateCount[2]) < 3 * maxVariance &&
                Math.abs(moduleSize - stateCount[3]) < maxVariance &&
                Math.abs(moduleSize - stateCount[4]) < maxVariance;
        }
        getCrossCheckStateCount() {
            const crossCheckStateCount = this.crossCheckStateCount;
            crossCheckStateCount[0] = 0;
            crossCheckStateCount[1] = 0;
            crossCheckStateCount[2] = 0;
            crossCheckStateCount[3] = 0;
            crossCheckStateCount[4] = 0;
            return crossCheckStateCount;
        }
        /**
         * After a vertical and horizontal scan finds a potential finder pattern, this method
         * "cross-cross-cross-checks" by scanning down diagonally through the center of the possible
         * finder pattern to see if the same proportion is detected.
         *
         * @param startI row where a finder pattern was detected
         * @param centerJ center of the section that appears to cross a finder pattern
         * @param maxCount maximum reasonable number of modules that should be
         *  observed in any reading state, based on the results of the horizontal scan
         * @param originalStateCountTotal The original state count total.
         * @return true if proportions are withing expected limits
         */
        crossCheckDiagonal(startI /*int*/, centerJ /*int*/, maxCount /*int*/, originalStateCountTotal /*int*/) {
            const stateCount = this.getCrossCheckStateCount();
            // Start counting up, left from center finding black center mass
            let i = 0;
            const image = this.image;
            while (startI >= i && centerJ >= i && image.get(centerJ - i, startI - i)) {
                stateCount[2]++;
                i++;
            }
            if (startI < i || centerJ < i) {
                return false;
            }
            // Continue up, left finding white space
            while (startI >= i && centerJ >= i && !image.get(centerJ - i, startI - i) &&
                stateCount[1] <= maxCount) {
                stateCount[1]++;
                i++;
            }
            // If already too many modules in this state or ran off the edge:
            if (startI < i || centerJ < i || stateCount[1] > maxCount) {
                return false;
            }
            // Continue up, left finding black border
            while (startI >= i && centerJ >= i && image.get(centerJ - i, startI - i) &&
                stateCount[0] <= maxCount) {
                stateCount[0]++;
                i++;
            }
            if (stateCount[0] > maxCount) {
                return false;
            }
            const maxI = image.getHeight();
            const maxJ = image.getWidth();
            // Now also count down, right from center
            i = 1;
            while (startI + i < maxI && centerJ + i < maxJ && image.get(centerJ + i, startI + i)) {
                stateCount[2]++;
                i++;
            }
            // Ran off the edge?
            if (startI + i >= maxI || centerJ + i >= maxJ) {
                return false;
            }
            while (startI + i < maxI && centerJ + i < maxJ && !image.get(centerJ + i, startI + i) &&
                stateCount[3] < maxCount) {
                stateCount[3]++;
                i++;
            }
            if (startI + i >= maxI || centerJ + i >= maxJ || stateCount[3] >= maxCount) {
                return false;
            }
            while (startI + i < maxI && centerJ + i < maxJ && image.get(centerJ + i, startI + i) &&
                stateCount[4] < maxCount) {
                stateCount[4]++;
                i++;
            }
            if (stateCount[4] >= maxCount) {
                return false;
            }
            // If we found a finder-pattern-like section, but its size is more than 100% different than
            // the original, assume it's a false positive
            const stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] + stateCount[4];
            return Math.abs(stateCountTotal - originalStateCountTotal) < 2 * originalStateCountTotal &&
                FinderPatternFinder.foundPatternCross(stateCount);
        }
        /**
         * <p>After a horizontal scan finds a potential finder pattern, this method
         * "cross-checks" by scanning down vertically through the center of the possible
         * finder pattern to see if the same proportion is detected.</p>
         *
         * @param startI row where a finder pattern was detected
         * @param centerJ center of the section that appears to cross a finder pattern
         * @param maxCount maximum reasonable number of modules that should be
         * observed in any reading state, based on the results of the horizontal scan
         * @return vertical center of finder pattern, or {@link Float#NaN} if not found
         */
        crossCheckVertical(startI /*int*/, centerJ /*int*/, maxCount /*int*/, originalStateCountTotal /*int*/) {
            const image = this.image;
            const maxI = image.getHeight();
            const stateCount = this.getCrossCheckStateCount();
            // Start counting up from center
            let i = startI;
            while (i >= 0 && image.get(centerJ, i)) {
                stateCount[2]++;
                i--;
            }
            if (i < 0) {
                return NaN;
            }
            while (i >= 0 && !image.get(centerJ, i) && stateCount[1] <= maxCount) {
                stateCount[1]++;
                i--;
            }
            // If already too many modules in this state or ran off the edge:
            if (i < 0 || stateCount[1] > maxCount) {
                return NaN;
            }
            while (i >= 0 && image.get(centerJ, i) && stateCount[0] <= maxCount) {
                stateCount[0]++;
                i--;
            }
            if (stateCount[0] > maxCount) {
                return NaN;
            }
            // Now also count down from center
            i = startI + 1;
            while (i < maxI && image.get(centerJ, i)) {
                stateCount[2]++;
                i++;
            }
            if (i === maxI) {
                return NaN;
            }
            while (i < maxI && !image.get(centerJ, i) && stateCount[3] < maxCount) {
                stateCount[3]++;
                i++;
            }
            if (i === maxI || stateCount[3] >= maxCount) {
                return NaN;
            }
            while (i < maxI && image.get(centerJ, i) && stateCount[4] < maxCount) {
                stateCount[4]++;
                i++;
            }
            if (stateCount[4] >= maxCount) {
                return NaN;
            }
            // If we found a finder-pattern-like section, but its size is more than 40% different than
            // the original, assume it's a false positive
            const stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] +
                stateCount[4];
            if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
                return NaN;
            }
            return FinderPatternFinder.foundPatternCross(stateCount) ? FinderPatternFinder.centerFromEnd(stateCount, i) : NaN;
        }
        /**
         * <p>Like {@link #crossCheckVertical(int, int, int, int)}, and in fact is basically identical,
         * except it reads horizontally instead of vertically. This is used to cross-cross
         * check a vertical cross check and locate the real center of the alignment pattern.</p>
         */
        crossCheckHorizontal(startJ /*int*/, centerI /*int*/, maxCount /*int*/, originalStateCountTotal /*int*/) {
            const image = this.image;
            const maxJ = image.getWidth();
            const stateCount = this.getCrossCheckStateCount();
            let j = startJ;
            while (j >= 0 && image.get(j, centerI)) {
                stateCount[2]++;
                j--;
            }
            if (j < 0) {
                return NaN;
            }
            while (j >= 0 && !image.get(j, centerI) && stateCount[1] <= maxCount) {
                stateCount[1]++;
                j--;
            }
            if (j < 0 || stateCount[1] > maxCount) {
                return NaN;
            }
            while (j >= 0 && image.get(j, centerI) && stateCount[0] <= maxCount) {
                stateCount[0]++;
                j--;
            }
            if (stateCount[0] > maxCount) {
                return NaN;
            }
            j = startJ + 1;
            while (j < maxJ && image.get(j, centerI)) {
                stateCount[2]++;
                j++;
            }
            if (j === maxJ) {
                return NaN;
            }
            while (j < maxJ && !image.get(j, centerI) && stateCount[3] < maxCount) {
                stateCount[3]++;
                j++;
            }
            if (j === maxJ || stateCount[3] >= maxCount) {
                return NaN;
            }
            while (j < maxJ && image.get(j, centerI) && stateCount[4] < maxCount) {
                stateCount[4]++;
                j++;
            }
            if (stateCount[4] >= maxCount) {
                return NaN;
            }
            // If we found a finder-pattern-like section, but its size is significantly different than
            // the original, assume it's a false positive
            const stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] +
                stateCount[4];
            if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= originalStateCountTotal) {
                return NaN;
            }
            return FinderPatternFinder.foundPatternCross(stateCount) ? FinderPatternFinder.centerFromEnd(stateCount, j) : NaN;
        }
        /**
         * <p>This is called when a horizontal scan finds a possible alignment pattern. It will
         * cross check with a vertical scan, and if successful, will, ah, cross-cross-check
         * with another horizontal scan. This is needed primarily to locate the real horizontal
         * center of the pattern in cases of extreme skew.
         * And then we cross-cross-cross check with another diagonal scan.</p>
         *
         * <p>If that succeeds the finder pattern location is added to a list that tracks
         * the number of times each location has been nearly-matched as a finder pattern.
         * Each additional find is more evidence that the location is in fact a finder
         * pattern center
         *
         * @param stateCount reading state module counts from horizontal scan
         * @param i row where finder pattern may be found
         * @param j end of possible finder pattern in row
         * @param pureBarcode true if in "pure barcode" mode
         * @return true if a finder pattern candidate was found this time
         */
        handlePossibleCenter(stateCount, i /*int*/, j /*int*/, pureBarcode) {
            const stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2] + stateCount[3] +
                stateCount[4];
            let centerJ = FinderPatternFinder.centerFromEnd(stateCount, j);
            let centerI = this.crossCheckVertical(i, /*(int) */ Math.floor(centerJ), stateCount[2], stateCountTotal);
            if (!isNaN(centerI)) {
                // Re-cross check
                centerJ = this.crossCheckHorizontal(/*(int) */ Math.floor(centerJ), /*(int) */ Math.floor(centerI), stateCount[2], stateCountTotal);
                if (!isNaN(centerJ) &&
                    (!pureBarcode || this.crossCheckDiagonal(/*(int) */ Math.floor(centerI), /*(int) */ Math.floor(centerJ), stateCount[2], stateCountTotal))) {
                    const estimatedModuleSize = stateCountTotal / 7.0;
                    let found = false;
                    const possibleCenters = this.possibleCenters;
                    for (let index = 0, length = possibleCenters.length; index < length; index++) {
                        const center = possibleCenters[index];
                        // Look for about the same center and module size:
                        if (center.aboutEquals(estimatedModuleSize, centerI, centerJ)) {
                            possibleCenters[index] = center.combineEstimate(centerI, centerJ, estimatedModuleSize);
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        const point = new FinderPattern(centerJ, centerI, estimatedModuleSize);
                        possibleCenters.push(point);
                        if (this.resultPointCallback !== null && this.resultPointCallback !== undefined) {
                            this.resultPointCallback.foundPossibleResultPoint(point);
                        }
                    }
                    return true;
                }
            }
            return false;
        }
        /**
         * @return number of rows we could safely skip during scanning, based on the first
         *         two finder patterns that have been located. In some cases their position will
         *         allow us to infer that the third pattern must lie below a certain point farther
         *         down in the image.
         */
        findRowSkip() {
            const max = this.possibleCenters.length;
            if (max <= 1) {
                return 0;
            }
            let firstConfirmedCenter = null;
            for (const center of this.possibleCenters) {
                if (center.getCount() >= FinderPatternFinder.CENTER_QUORUM) {
                    if (firstConfirmedCenter == null) {
                        firstConfirmedCenter = center;
                    }
                    else {
                        // We have two confirmed centers
                        // How far down can we skip before resuming looking for the next
                        // pattern? In the worst case, only the difference between the
                        // difference in the x / y coordinates of the two centers.
                        // This is the case where you find top left last.
                        this.hasSkipped = true;
                        return /*(int) */ Math.floor((Math.abs(firstConfirmedCenter.getX() - center.getX()) -
                            Math.abs(firstConfirmedCenter.getY() - center.getY())) / 2);
                    }
                }
            }
            return 0;
        }
        /**
         * @return true iff we have found at least 3 finder patterns that have been detected
         *         at least {@link #CENTER_QUORUM} times each, and, the estimated module size of the
         *         candidates is "pretty similar"
         */
        haveMultiplyConfirmedCenters() {
            let confirmedCount = 0;
            let totalModuleSize = 0.0;
            const max = this.possibleCenters.length;
            for (const pattern of this.possibleCenters) {
                if (pattern.getCount() >= FinderPatternFinder.CENTER_QUORUM) {
                    confirmedCount++;
                    totalModuleSize += pattern.getEstimatedModuleSize();
                }
            }
            if (confirmedCount < 3) {
                return false;
            }
            // OK, we have at least 3 confirmed centers, but, it's possible that one is a "false positive"
            // and that we need to keep looking. We detect this by asking if the estimated module sizes
            // vary too much. We arbitrarily say that when the total deviation from average exceeds
            // 5% of the total module size estimates, it's too much.
            const average = totalModuleSize / max;
            let totalDeviation = 0.0;
            for (const pattern of this.possibleCenters) {
                totalDeviation += Math.abs(pattern.getEstimatedModuleSize() - average);
            }
            return totalDeviation <= 0.05 * totalModuleSize;
        }
        /**
         * @return the 3 best {@link FinderPattern}s from our list of candidates. The "best" are
         *         those that have been detected at least {@link #CENTER_QUORUM} times, and whose module
         *         size differs from the average among those patterns the least
         * @throws NotFoundException if 3 such finder patterns do not exist
         */
        selectBestPatterns() {
            const startSize = this.possibleCenters.length;
            if (startSize < 3) {
                // Couldn't find enough finder patterns
                throw new NotFoundException();
            }
            const possibleCenters = this.possibleCenters;
            let average;
            // Filter outlier possibilities whose module size is too different
            if (startSize > 3) {
                // But we can only afford to do so if we have at least 4 possibilities to choose from
                let totalModuleSize = 0.0;
                let square = 0.0;
                for (const center of this.possibleCenters) {
                    const size = center.getEstimatedModuleSize();
                    totalModuleSize += size;
                    square += size * size;
                }
                average = totalModuleSize / startSize;
                let stdDev = Math.sqrt(square / startSize - average * average);
                possibleCenters.sort(
                /**
                 * <p>Orders by furthest from average</p>
                 */
                // FurthestFromAverageComparator implements Comparator<FinderPattern>
                (center1, center2) => {
                    const dA = Math.abs(center2.getEstimatedModuleSize() - average);
                    const dB = Math.abs(center1.getEstimatedModuleSize() - average);
                    return dA < dB ? -1 : dA > dB ? 1 : 0;
                });
                const limit = Math.max(0.2 * average, stdDev);
                for (let i = 0; i < possibleCenters.length && possibleCenters.length > 3; i++) {
                    const pattern = possibleCenters[i];
                    if (Math.abs(pattern.getEstimatedModuleSize() - average) > limit) {
                        possibleCenters.splice(i, 1);
                        i--;
                    }
                }
            }
            if (possibleCenters.length > 3) {
                // Throw away all but those first size candidate points we found.
                let totalModuleSize = 0.0;
                for (const possibleCenter of possibleCenters) {
                    totalModuleSize += possibleCenter.getEstimatedModuleSize();
                }
                average = totalModuleSize / possibleCenters.length;
                possibleCenters.sort(
                /**
                 * <p>Orders by {@link FinderPattern#getCount()}, descending.</p>
                 */
                // CenterComparator implements Comparator<FinderPattern>
                (center1, center2) => {
                    if (center2.getCount() === center1.getCount()) {
                        const dA = Math.abs(center2.getEstimatedModuleSize() - average);
                        const dB = Math.abs(center1.getEstimatedModuleSize() - average);
                        return dA < dB ? 1 : dA > dB ? -1 : 0;
                    }
                    else {
                        return center2.getCount() - center1.getCount();
                    }
                });
                possibleCenters.splice(3); // this is not realy necessary as we only return first 3 anyway
            }
            return [
                possibleCenters[0],
                possibleCenters[1],
                possibleCenters[2]
            ];
        }
    }
    FinderPatternFinder.CENTER_QUORUM = 2;
    FinderPatternFinder.MIN_SKIP = 3; // 1 pixel/module times 3 modules/center
    FinderPatternFinder.MAX_MODULES = 57; // support up to version 10 for mobile clients

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * <p>Encapsulates an alignment pattern, which are the smaller square patterns found in
     * all but the simplest QR Codes.</p>
     *
     * @author Sean Owen
     */
    class AlignmentPattern extends ResultPoint {
        constructor(posX /*float*/, posY /*float*/, estimatedModuleSize /*float*/) {
            super(posX, posY);
            this.estimatedModuleSize = estimatedModuleSize;
        }
        /**
         * <p>Determines if this alignment pattern "about equals" an alignment pattern at the stated
         * position and size -- meaning, it is at nearly the same center with nearly the same size.</p>
         */
        aboutEquals(moduleSize /*float*/, i /*float*/, j /*float*/) {
            if (Math.abs(i - this.getY()) <= moduleSize && Math.abs(j - this.getX()) <= moduleSize) {
                const moduleSizeDiff = Math.abs(moduleSize - this.estimatedModuleSize);
                return moduleSizeDiff <= 1.0 || moduleSizeDiff <= this.estimatedModuleSize;
            }
            return false;
        }
        /**
         * Combines this object's current estimate of a finder pattern position and module size
         * with a new estimate. It returns a new {@code FinderPattern} containing an average of the two.
         */
        combineEstimate(i /*float*/, j /*float*/, newModuleSize /*float*/) {
            const combinedX = (this.getX() + j) / 2.0;
            const combinedY = (this.getY() + i) / 2.0;
            const combinedModuleSize = (this.estimatedModuleSize + newModuleSize) / 2.0;
            return new AlignmentPattern(combinedX, combinedY, combinedModuleSize);
        }
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /*import java.util.ArrayList;*/
    /*import java.util.List;*/
    /**
     * <p>This class attempts to find alignment patterns in a QR Code. Alignment patterns look like finder
     * patterns but are smaller and appear at regular intervals throughout the image.</p>
     *
     * <p>At the moment this only looks for the bottom-right alignment pattern.</p>
     *
     * <p>This is mostly a simplified copy of {@link FinderPatternFinder}. It is copied,
     * pasted and stripped down here for maximum performance but does unfortunately duplicate
     * some code.</p>
     *
     * <p>This class is thread-safe but not reentrant. Each thread must allocate its own object.</p>
     *
     * @author Sean Owen
     */
    class AlignmentPatternFinder {
        /**
         * <p>Creates a finder that will look in a portion of the whole image.</p>
         *
         * @param image image to search
         * @param startX left column from which to start searching
         * @param startY top row from which to start searching
         * @param width width of region to search
         * @param height height of region to search
         * @param moduleSize estimated module size so far
         */
        constructor(image, startX /*int*/, startY /*int*/, width /*int*/, height /*int*/, moduleSize /*float*/, resultPointCallback) {
            this.image = image;
            this.startX = startX;
            this.startY = startY;
            this.width = width;
            this.height = height;
            this.moduleSize = moduleSize;
            this.resultPointCallback = resultPointCallback;
            this.possibleCenters = []; // new Array<any>(5))
            // TYPESCRIPTPORT: array initialization without size as the length is checked below
            this.crossCheckStateCount = new Int32Array(3);
        }
        /**
         * <p>This method attempts to find the bottom-right alignment pattern in the image. It is a bit messy since
         * it's pretty performance-critical and so is written to be fast foremost.</p>
         *
         * @return {@link AlignmentPattern} if found
         * @throws NotFoundException if not found
         */
        find() {
            const startX = this.startX;
            const height = this.height;
            const width = this.width;
            const maxJ = startX + width;
            const middleI = this.startY + (height / 2);
            // We are looking for black/white/black modules in 1:1:1 ratio
            // this tracks the number of black/white/black modules seen so far
            const stateCount = new Int32Array(3);
            const image = this.image;
            for (let iGen = 0; iGen < height; iGen++) {
                // Search from middle outwards
                const i = middleI + ((iGen & 0x01) === 0 ? Math.floor((iGen + 1) / 2) : -Math.floor((iGen + 1) / 2));
                stateCount[0] = 0;
                stateCount[1] = 0;
                stateCount[2] = 0;
                let j = startX;
                // Burn off leading white pixels before anything else; if we start in the middle of
                // a white run, it doesn't make sense to count its length, since we don't know if the
                // white run continued to the left of the start point
                while (j < maxJ && !image.get(j, i)) {
                    j++;
                }
                let currentState = 0;
                while (j < maxJ) {
                    if (image.get(j, i)) {
                        // Black pixel
                        if (currentState === 1) { // Counting black pixels
                            stateCount[1]++;
                        }
                        else { // Counting white pixels
                            if (currentState === 2) { // A winner?
                                if (this.foundPatternCross(stateCount)) { // Yes
                                    const confirmed = this.handlePossibleCenter(stateCount, i, j);
                                    if (confirmed !== null) {
                                        return confirmed;
                                    }
                                }
                                stateCount[0] = stateCount[2];
                                stateCount[1] = 1;
                                stateCount[2] = 0;
                                currentState = 1;
                            }
                            else {
                                stateCount[++currentState]++;
                            }
                        }
                    }
                    else { // White pixel
                        if (currentState === 1) { // Counting black pixels
                            currentState++;
                        }
                        stateCount[currentState]++;
                    }
                    j++;
                }
                if (this.foundPatternCross(stateCount)) {
                    const confirmed = this.handlePossibleCenter(stateCount, i, maxJ);
                    if (confirmed !== null) {
                        return confirmed;
                    }
                }
            }
            // Hmm, nothing we saw was observed and confirmed twice. If we had
            // any guess at all, return it.
            if (this.possibleCenters.length !== 0) {
                return this.possibleCenters[0];
            }
            throw new NotFoundException();
        }
        /**
         * Given a count of black/white/black pixels just seen and an end position,
         * figures the location of the center of this black/white/black run.
         */
        static centerFromEnd(stateCount, end /*int*/) {
            return (end - stateCount[2]) - stateCount[1] / 2.0;
        }
        /**
         * @param stateCount count of black/white/black pixels just read
         * @return true iff the proportions of the counts is close enough to the 1/1/1 ratios
         *         used by alignment patterns to be considered a match
         */
        foundPatternCross(stateCount) {
            const moduleSize = this.moduleSize;
            const maxVariance = moduleSize / 2.0;
            for (let i = 0; i < 3; i++) {
                if (Math.abs(moduleSize - stateCount[i]) >= maxVariance) {
                    return false;
                }
            }
            return true;
        }
        /**
         * <p>After a horizontal scan finds a potential alignment pattern, this method
         * "cross-checks" by scanning down vertically through the center of the possible
         * alignment pattern to see if the same proportion is detected.</p>
         *
         * @param startI row where an alignment pattern was detected
         * @param centerJ center of the section that appears to cross an alignment pattern
         * @param maxCount maximum reasonable number of modules that should be
         * observed in any reading state, based on the results of the horizontal scan
         * @return vertical center of alignment pattern, or {@link Float#NaN} if not found
         */
        crossCheckVertical(startI /*int*/, centerJ /*int*/, maxCount /*int*/, originalStateCountTotal /*int*/) {
            const image = this.image;
            const maxI = image.getHeight();
            const stateCount = this.crossCheckStateCount;
            stateCount[0] = 0;
            stateCount[1] = 0;
            stateCount[2] = 0;
            // Start counting up from center
            let i = startI;
            while (i >= 0 && image.get(centerJ, i) && stateCount[1] <= maxCount) {
                stateCount[1]++;
                i--;
            }
            // If already too many modules in this state or ran off the edge:
            if (i < 0 || stateCount[1] > maxCount) {
                return NaN;
            }
            while (i >= 0 && !image.get(centerJ, i) && stateCount[0] <= maxCount) {
                stateCount[0]++;
                i--;
            }
            if (stateCount[0] > maxCount) {
                return NaN;
            }
            // Now also count down from center
            i = startI + 1;
            while (i < maxI && image.get(centerJ, i) && stateCount[1] <= maxCount) {
                stateCount[1]++;
                i++;
            }
            if (i === maxI || stateCount[1] > maxCount) {
                return NaN;
            }
            while (i < maxI && !image.get(centerJ, i) && stateCount[2] <= maxCount) {
                stateCount[2]++;
                i++;
            }
            if (stateCount[2] > maxCount) {
                return NaN;
            }
            const stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
            if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
                return NaN;
            }
            return this.foundPatternCross(stateCount) ? AlignmentPatternFinder.centerFromEnd(stateCount, i) : NaN;
        }
        /**
         * <p>This is called when a horizontal scan finds a possible alignment pattern. It will
         * cross check with a vertical scan, and if successful, will see if this pattern had been
         * found on a previous horizontal scan. If so, we consider it confirmed and conclude we have
         * found the alignment pattern.</p>
         *
         * @param stateCount reading state module counts from horizontal scan
         * @param i row where alignment pattern may be found
         * @param j end of possible alignment pattern in row
         * @return {@link AlignmentPattern} if we have found the same pattern twice, or null if not
         */
        handlePossibleCenter(stateCount, i /*int*/, j /*int*/) {
            const stateCountTotal = stateCount[0] + stateCount[1] + stateCount[2];
            const centerJ = AlignmentPatternFinder.centerFromEnd(stateCount, j);
            const centerI = this.crossCheckVertical(i, /*(int) */ centerJ, 2 * stateCount[1], stateCountTotal);
            if (!isNaN(centerI)) {
                const estimatedModuleSize = (stateCount[0] + stateCount[1] + stateCount[2]) / 3.0;
                for (const center of this.possibleCenters) {
                    // Look for about the same center and module size:
                    if (center.aboutEquals(estimatedModuleSize, centerI, centerJ)) {
                        return center.combineEstimate(centerI, centerJ, estimatedModuleSize);
                    }
                }
                // Hadn't found this before; save it
                const point = new AlignmentPattern(centerJ, centerI, estimatedModuleSize);
                this.possibleCenters.push(point);
                if (this.resultPointCallback !== null && this.resultPointCallback !== undefined) {
                    this.resultPointCallback.foundPossibleResultPoint(point);
                }
            }
            return null;
        }
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /*import java.util.Map;*/
    /**
     * <p>Encapsulates logic that can detect a QR Code in an image, even if the QR Code
     * is rotated or skewed, or partially obscured.</p>
     *
     * @author Sean Owen
     */
    class Detector {
        constructor(image) {
            this.image = image;
        }
        getImage() {
            return this.image;
        }
        getResultPointCallback() {
            return this.resultPointCallback;
        }
        /**
         * <p>Detects a QR Code in an image.</p>
         *
         * @return {@link DetectorResult} encapsulating results of detecting a QR Code
         * @throws NotFoundException if QR Code cannot be found
         * @throws FormatException if a QR Code cannot be decoded
         */
        // public detect(): DetectorResult /*throws NotFoundException, FormatException*/ {
        //   return detect(null)
        // }
        /**
         * <p>Detects a QR Code in an image.</p>
         *
         * @param hints optional hints to detector
         * @return {@link DetectorResult} encapsulating results of detecting a QR Code
         * @throws NotFoundException if QR Code cannot be found
         * @throws FormatException if a QR Code cannot be decoded
         */
        detect(hints) {
            this.resultPointCallback = (hints === null || hints === undefined) ? null :
                /*(ResultPointCallback) */ hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);
            const finder = new FinderPatternFinder(this.image, this.resultPointCallback);
            const info = finder.find(hints);
            return this.processFinderPatternInfo(info);
        }
        processFinderPatternInfo(info) {
            const topLeft = info.getTopLeft();
            const topRight = info.getTopRight();
            const bottomLeft = info.getBottomLeft();
            const moduleSize = this.calculateModuleSize(topLeft, topRight, bottomLeft);
            if (moduleSize < 1.0) {
                throw new NotFoundException('No pattern found in proccess finder.');
            }
            const dimension = Detector.computeDimension(topLeft, topRight, bottomLeft, moduleSize);
            const provisionalVersion = Version$1.getProvisionalVersionForDimension(dimension);
            const modulesBetweenFPCenters = provisionalVersion.getDimensionForVersion() - 7;
            let alignmentPattern = null;
            // Anything above version 1 has an alignment pattern
            if (provisionalVersion.getAlignmentPatternCenters().length > 0) {
                // Guess where a "bottom right" finder pattern would have been
                const bottomRightX = topRight.getX() - topLeft.getX() + bottomLeft.getX();
                const bottomRightY = topRight.getY() - topLeft.getY() + bottomLeft.getY();
                // Estimate that alignment pattern is closer by 3 modules
                // from "bottom right" to known top left location
                const correctionToTopLeft = 1.0 - 3.0 / modulesBetweenFPCenters;
                const estAlignmentX = /*(int) */ Math.floor(topLeft.getX() + correctionToTopLeft * (bottomRightX - topLeft.getX()));
                const estAlignmentY = /*(int) */ Math.floor(topLeft.getY() + correctionToTopLeft * (bottomRightY - topLeft.getY()));
                // Kind of arbitrary -- expand search radius before giving up
                for (let i = 4; i <= 16; i <<= 1) {
                    try {
                        alignmentPattern = this.findAlignmentInRegion(moduleSize, estAlignmentX, estAlignmentY, i);
                        break;
                    }
                    catch (re /*NotFoundException*/) {
                        if (!(re instanceof NotFoundException)) {
                            throw re;
                        }
                        // try next round
                    }
                }
                // If we didn't find alignment pattern... well try anyway without it
            }
            const transform = Detector.createTransform(topLeft, topRight, bottomLeft, alignmentPattern, dimension);
            const bits = Detector.sampleGrid(this.image, transform, dimension);
            let points;
            if (alignmentPattern === null) {
                points = [bottomLeft, topLeft, topRight];
            }
            else {
                points = [bottomLeft, topLeft, topRight, alignmentPattern];
            }
            return new DetectorResult(bits, points);
        }
        static createTransform(topLeft, topRight, bottomLeft, alignmentPattern, dimension /*int*/) {
            const dimMinusThree = dimension - 3.5;
            let bottomRightX; /*float*/
            let bottomRightY; /*float*/
            let sourceBottomRightX; /*float*/
            let sourceBottomRightY; /*float*/
            if (alignmentPattern !== null) {
                bottomRightX = alignmentPattern.getX();
                bottomRightY = alignmentPattern.getY();
                sourceBottomRightX = dimMinusThree - 3.0;
                sourceBottomRightY = sourceBottomRightX;
            }
            else {
                // Don't have an alignment pattern, just make up the bottom-right point
                bottomRightX = (topRight.getX() - topLeft.getX()) + bottomLeft.getX();
                bottomRightY = (topRight.getY() - topLeft.getY()) + bottomLeft.getY();
                sourceBottomRightX = dimMinusThree;
                sourceBottomRightY = dimMinusThree;
            }
            return PerspectiveTransform.quadrilateralToQuadrilateral(3.5, 3.5, dimMinusThree, 3.5, sourceBottomRightX, sourceBottomRightY, 3.5, dimMinusThree, topLeft.getX(), topLeft.getY(), topRight.getX(), topRight.getY(), bottomRightX, bottomRightY, bottomLeft.getX(), bottomLeft.getY());
        }
        static sampleGrid(image, transform, dimension /*int*/) {
            const sampler = GridSamplerInstance.getInstance();
            return sampler.sampleGridWithTransform(image, dimension, dimension, transform);
        }
        /**
         * <p>Computes the dimension (number of modules on a size) of the QR Code based on the position
         * of the finder patterns and estimated module size.</p>
         */
        static computeDimension(topLeft, topRight, bottomLeft, moduleSize /*float*/) {
            const tltrCentersDimension = MathUtils.round(ResultPoint.distance(topLeft, topRight) / moduleSize);
            const tlblCentersDimension = MathUtils.round(ResultPoint.distance(topLeft, bottomLeft) / moduleSize);
            let dimension = Math.floor((tltrCentersDimension + tlblCentersDimension) / 2) + 7;
            switch (dimension & 0x03) { // mod 4
                case 0:
                    dimension++;
                    break;
                // 1? do nothing
                case 2:
                    dimension--;
                    break;
                case 3:
                    throw new NotFoundException('Dimensions could be not found.');
            }
            return dimension;
        }
        /**
         * <p>Computes an average estimated module size based on estimated derived from the positions
         * of the three finder patterns.</p>
         *
         * @param topLeft detected top-left finder pattern center
         * @param topRight detected top-right finder pattern center
         * @param bottomLeft detected bottom-left finder pattern center
         * @return estimated module size
         */
        calculateModuleSize(topLeft, topRight, bottomLeft) {
            // Take the average
            return (this.calculateModuleSizeOneWay(topLeft, topRight) +
                this.calculateModuleSizeOneWay(topLeft, bottomLeft)) / 2.0;
        }
        /**
         * <p>Estimates module size based on two finder patterns -- it uses
         * {@link #sizeOfBlackWhiteBlackRunBothWays(int, int, int, int)} to figure the
         * width of each, measuring along the axis between their centers.</p>
         */
        calculateModuleSizeOneWay(pattern, otherPattern) {
            const moduleSizeEst1 = this.sizeOfBlackWhiteBlackRunBothWays(/*(int) */ Math.floor(pattern.getX()), 
            /*(int) */ Math.floor(pattern.getY()), 
            /*(int) */ Math.floor(otherPattern.getX()), 
            /*(int) */ Math.floor(otherPattern.getY()));
            const moduleSizeEst2 = this.sizeOfBlackWhiteBlackRunBothWays(/*(int) */ Math.floor(otherPattern.getX()), 
            /*(int) */ Math.floor(otherPattern.getY()), 
            /*(int) */ Math.floor(pattern.getX()), 
            /*(int) */ Math.floor(pattern.getY()));
            if (isNaN(moduleSizeEst1)) {
                return moduleSizeEst2 / 7.0;
            }
            if (isNaN(moduleSizeEst2)) {
                return moduleSizeEst1 / 7.0;
            }
            // Average them, and divide by 7 since we've counted the width of 3 black modules,
            // and 1 white and 1 black module on either side. Ergo, divide sum by 14.
            return (moduleSizeEst1 + moduleSizeEst2) / 14.0;
        }
        /**
         * See {@link #sizeOfBlackWhiteBlackRun(int, int, int, int)}; computes the total width of
         * a finder pattern by looking for a black-white-black run from the center in the direction
         * of another point (another finder pattern center), and in the opposite direction too.
         */
        sizeOfBlackWhiteBlackRunBothWays(fromX /*int*/, fromY /*int*/, toX /*int*/, toY /*int*/) {
            let result = this.sizeOfBlackWhiteBlackRun(fromX, fromY, toX, toY);
            // Now count other way -- don't run off image though of course
            let scale = 1.0;
            let otherToX = fromX - (toX - fromX);
            if (otherToX < 0) {
                scale = fromX / /*(float) */ (fromX - otherToX);
                otherToX = 0;
            }
            else if (otherToX >= this.image.getWidth()) {
                scale = (this.image.getWidth() - 1 - fromX) / /*(float) */ (otherToX - fromX);
                otherToX = this.image.getWidth() - 1;
            }
            let otherToY = /*(int) */ Math.floor(fromY - (toY - fromY) * scale);
            scale = 1.0;
            if (otherToY < 0) {
                scale = fromY / /*(float) */ (fromY - otherToY);
                otherToY = 0;
            }
            else if (otherToY >= this.image.getHeight()) {
                scale = (this.image.getHeight() - 1 - fromY) / /*(float) */ (otherToY - fromY);
                otherToY = this.image.getHeight() - 1;
            }
            otherToX = /*(int) */ Math.floor(fromX + (otherToX - fromX) * scale);
            result += this.sizeOfBlackWhiteBlackRun(fromX, fromY, otherToX, otherToY);
            // Middle pixel is double-counted this way; subtract 1
            return result - 1.0;
        }
        /**
         * <p>This method traces a line from a point in the image, in the direction towards another point.
         * It begins in a black region, and keeps going until it finds white, then black, then white again.
         * It reports the distance from the start to this point.</p>
         *
         * <p>This is used when figuring out how wide a finder pattern is, when the finder pattern
         * may be skewed or rotated.</p>
         */
        sizeOfBlackWhiteBlackRun(fromX /*int*/, fromY /*int*/, toX /*int*/, toY /*int*/) {
            // Mild variant of Bresenham's algorithm
            // see http://en.wikipedia.org/wiki/Bresenham's_line_algorithm
            const steep = Math.abs(toY - fromY) > Math.abs(toX - fromX);
            if (steep) {
                let temp = fromX;
                fromX = fromY;
                fromY = temp;
                temp = toX;
                toX = toY;
                toY = temp;
            }
            const dx = Math.abs(toX - fromX);
            const dy = Math.abs(toY - fromY);
            let error = -dx / 2;
            const xstep = fromX < toX ? 1 : -1;
            const ystep = fromY < toY ? 1 : -1;
            // In black pixels, looking for white, first or second time.
            let state = 0;
            // Loop up until x == toX, but not beyond
            const xLimit = toX + xstep;
            for (let x = fromX, y = fromY; x !== xLimit; x += xstep) {
                const realX = steep ? y : x;
                const realY = steep ? x : y;
                // Does current pixel mean we have moved white to black or vice versa?
                // Scanning black in state 0,2 and white in state 1, so if we find the wrong
                // color, advance to next state or end if we are in state 2 already
                if ((state === 1) === this.image.get(realX, realY)) {
                    if (state === 2) {
                        return MathUtils.distance(x, y, fromX, fromY);
                    }
                    state++;
                }
                error += dy;
                if (error > 0) {
                    if (y === toY) {
                        break;
                    }
                    y += ystep;
                    error -= dx;
                }
            }
            // Found black-white-black; give the benefit of the doubt that the next pixel outside the image
            // is "white" so this last point at (toX+xStep,toY) is the right ending. This is really a
            // small approximation; (toX+xStep,toY+yStep) might be really correct. Ignore this.
            if (state === 2) {
                return MathUtils.distance(toX + xstep, toY, fromX, fromY);
            }
            // else we didn't find even black-white-black; no estimate is really possible
            return NaN;
        }
        /**
         * <p>Attempts to locate an alignment pattern in a limited region of the image, which is
         * guessed to contain it. This method uses {@link AlignmentPattern}.</p>
         *
         * @param overallEstModuleSize estimated module size so far
         * @param estAlignmentX x coordinate of center of area probably containing alignment pattern
         * @param estAlignmentY y coordinate of above
         * @param allowanceFactor number of pixels in all directions to search from the center
         * @return {@link AlignmentPattern} if found, or null otherwise
         * @throws NotFoundException if an unexpected error occurs during detection
         */
        findAlignmentInRegion(overallEstModuleSize /*float*/, estAlignmentX /*int*/, estAlignmentY /*int*/, allowanceFactor /*float*/) {
            // Look for an alignment pattern (3 modules in size) around where it
            // should be
            const allowance = /*(int) */ Math.floor(allowanceFactor * overallEstModuleSize);
            const alignmentAreaLeftX = Math.max(0, estAlignmentX - allowance);
            const alignmentAreaRightX = Math.min(this.image.getWidth() - 1, estAlignmentX + allowance);
            if (alignmentAreaRightX - alignmentAreaLeftX < overallEstModuleSize * 3) {
                throw new NotFoundException('Alignment top exceeds estimated module size.');
            }
            const alignmentAreaTopY = Math.max(0, estAlignmentY - allowance);
            const alignmentAreaBottomY = Math.min(this.image.getHeight() - 1, estAlignmentY + allowance);
            if (alignmentAreaBottomY - alignmentAreaTopY < overallEstModuleSize * 3) {
                throw new NotFoundException('Alignment bottom exceeds estimated module size.');
            }
            const alignmentFinder = new AlignmentPatternFinder(this.image, alignmentAreaLeftX, alignmentAreaTopY, alignmentAreaRightX - alignmentAreaLeftX, alignmentAreaBottomY - alignmentAreaTopY, overallEstModuleSize, this.resultPointCallback);
            return alignmentFinder.find();
        }
    }

    /*
     * Copyright 2007 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /*import java.util.List;*/
    /*import java.util.Map;*/
    /**
     * This implementation can detect and decode QR Codes in an image.
     *
     * @author Sean Owen
     */
    class QRCodeReader {
        constructor() {
            this.decoder = new Decoder();
        }
        getDecoder() {
            return this.decoder;
        }
        /**
         * Locates and decodes a QR code in an image.
         *
         * @return a representing: string the content encoded by the QR code
         * @throws NotFoundException if a QR code cannot be found
         * @throws FormatException if a QR code cannot be decoded
         * @throws ChecksumException if error correction fails
         */
        /*@Override*/
        // public decode(image: BinaryBitmap): Result /*throws NotFoundException, ChecksumException, FormatException */ {
        //   return this.decode(image, null)
        // }
        /*@Override*/
        decode(image, hints) {
            let decoderResult;
            let points;
            if (hints !== undefined && hints !== null && undefined !== hints.get(DecodeHintType$1.PURE_BARCODE)) {
                const bits = QRCodeReader.extractPureBits(image.getBlackMatrix());
                decoderResult = this.decoder.decodeBitMatrix(bits, hints);
                points = QRCodeReader.NO_POINTS;
            }
            else {
                const detectorResult = new Detector(image.getBlackMatrix()).detect(hints);
                decoderResult = this.decoder.decodeBitMatrix(detectorResult.getBits(), hints);
                points = detectorResult.getPoints();
            }
            // If the code was mirrored: swap the bottom-left and the top-right points.
            if (decoderResult.getOther() instanceof QRCodeDecoderMetaData) {
                decoderResult.getOther().applyMirroredCorrection(points);
            }
            const result = new Result(decoderResult.getText(), decoderResult.getRawBytes(), undefined, points, BarcodeFormat$1.QR_CODE, undefined);
            const byteSegments = decoderResult.getByteSegments();
            if (byteSegments !== null) {
                result.putMetadata(ResultMetadataType$1.BYTE_SEGMENTS, byteSegments);
            }
            const ecLevel = decoderResult.getECLevel();
            if (ecLevel !== null) {
                result.putMetadata(ResultMetadataType$1.ERROR_CORRECTION_LEVEL, ecLevel);
            }
            if (decoderResult.hasStructuredAppend()) {
                result.putMetadata(ResultMetadataType$1.STRUCTURED_APPEND_SEQUENCE, decoderResult.getStructuredAppendSequenceNumber());
                result.putMetadata(ResultMetadataType$1.STRUCTURED_APPEND_PARITY, decoderResult.getStructuredAppendParity());
            }
            return result;
        }
        /*@Override*/
        reset() {
            // do nothing
        }
        /**
         * This method detects a code in a "pure" image -- that is, pure monochrome image
         * which contains only an unrotated, unskewed, image of a code, with some white border
         * around it. This is a specialized method that works exceptionally fast in this special
         * case.
         *
         * @see com.google.zxing.datamatrix.DataMatrixReader#extractPureBits(BitMatrix)
         */
        static extractPureBits(image) {
            const leftTopBlack = image.getTopLeftOnBit();
            const rightBottomBlack = image.getBottomRightOnBit();
            if (leftTopBlack === null || rightBottomBlack === null) {
                throw new NotFoundException();
            }
            const moduleSize = this.moduleSize(leftTopBlack, image);
            let top = leftTopBlack[1];
            let bottom = rightBottomBlack[1];
            let left = leftTopBlack[0];
            let right = rightBottomBlack[0];
            // Sanity check!
            if (left >= right || top >= bottom) {
                throw new NotFoundException();
            }
            if (bottom - top !== right - left) {
                // Special case, where bottom-right module wasn't black so we found something else in the last row
                // Assume it's a square, so use height as the width
                right = left + (bottom - top);
                if (right >= image.getWidth()) {
                    // Abort if that would not make sense -- off image
                    throw new NotFoundException();
                }
            }
            const matrixWidth = Math.round((right - left + 1) / moduleSize);
            const matrixHeight = Math.round((bottom - top + 1) / moduleSize);
            if (matrixWidth <= 0 || matrixHeight <= 0) {
                throw new NotFoundException();
            }
            if (matrixHeight !== matrixWidth) {
                // Only possibly decode square regions
                throw new NotFoundException();
            }
            // Push in the "border" by half the module width so that we start
            // sampling in the middle of the module. Just in case the image is a
            // little off, this will help recover.
            const nudge = /*(int) */ Math.floor(moduleSize / 2.0);
            top += nudge;
            left += nudge;
            // But careful that this does not sample off the edge
            // "right" is the farthest-right valid pixel location -- right+1 is not necessarily
            // This is positive by how much the inner x loop below would be too large
            const nudgedTooFarRight = left + /*(int) */ Math.floor((matrixWidth - 1) * moduleSize) - right;
            if (nudgedTooFarRight > 0) {
                if (nudgedTooFarRight > nudge) {
                    // Neither way fits; abort
                    throw new NotFoundException();
                }
                left -= nudgedTooFarRight;
            }
            // See logic above
            const nudgedTooFarDown = top + /*(int) */ Math.floor((matrixHeight - 1) * moduleSize) - bottom;
            if (nudgedTooFarDown > 0) {
                if (nudgedTooFarDown > nudge) {
                    // Neither way fits; abort
                    throw new NotFoundException();
                }
                top -= nudgedTooFarDown;
            }
            // Now just read off the bits
            const bits = new BitMatrix(matrixWidth, matrixHeight);
            for (let y = 0; y < matrixHeight; y++) {
                const iOffset = top + /*(int) */ Math.floor(y * moduleSize);
                for (let x = 0; x < matrixWidth; x++) {
                    if (image.get(left + /*(int) */ Math.floor(x * moduleSize), iOffset)) {
                        bits.set(x, y);
                    }
                }
            }
            return bits;
        }
        static moduleSize(leftTopBlack, image) {
            const height = image.getHeight();
            const width = image.getWidth();
            let x = leftTopBlack[0];
            let y = leftTopBlack[1];
            let inBlack = true;
            let transitions = 0;
            while (x < width && y < height) {
                if (inBlack !== image.get(x, y)) {
                    if (++transitions === 5) {
                        break;
                    }
                    inBlack = !inBlack;
                }
                x++;
                y++;
            }
            if (x === width || y === height) {
                throw new NotFoundException();
            }
            return (x - leftTopBlack[0]) / 7.0;
        }
    }
    QRCodeReader.NO_POINTS = new Array();

    /*
    * Copyright 2009 ZXing authors
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *      http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
    /**
     * @author SITA Lab (kevin.osullivan@sita.aero)
     * @author Guenther Grau
     */
    /*public final*/ class PDF417Common {
        PDF417Common() {
        }
        /**
         * @param moduleBitCount values to sum
         * @return sum of values
         * @deprecated call {@link MathUtils#sum(int[])}
         */
        // @Deprecated
        static getBitCountSum(moduleBitCount) {
            return MathUtils.sum(moduleBitCount);
        }
        static toIntArray(list) {
            if (list == null || !list.length) {
                return PDF417Common.EMPTY_INT_ARRAY;
            }
            const result = new Int32Array(list.length);
            let i = 0;
            for (const integer of list) {
                result[i++] = integer;
            }
            return result;
        }
        /**
         * @param symbol encoded symbol to translate to a codeword
         * @return the codeword corresponding to the symbol.
         */
        static getCodeword(symbol /*int*/) {
            const i = Arrays.binarySearch(PDF417Common.SYMBOL_TABLE, symbol & 0x3FFFF);
            if (i < 0) {
                return -1;
            }
            return (PDF417Common.CODEWORD_TABLE[i] - 1) % PDF417Common.NUMBER_OF_CODEWORDS;
        }
    }
    PDF417Common.NUMBER_OF_CODEWORDS = 929;
    // Maximum Codewords (Data + Error).
    PDF417Common.MAX_CODEWORDS_IN_BARCODE = PDF417Common.NUMBER_OF_CODEWORDS - 1;
    PDF417Common.MIN_ROWS_IN_BARCODE = 3;
    PDF417Common.MAX_ROWS_IN_BARCODE = 90;
    // One left row indication column + max 30 data columns + one right row indicator column
    // public static /*final*/ MAX_CODEWORDS_IN_ROW: /*int*/ number = 32;
    PDF417Common.MODULES_IN_CODEWORD = 17;
    PDF417Common.MODULES_IN_STOP_PATTERN = 18;
    PDF417Common.BARS_IN_MODULE = 8;
    PDF417Common.EMPTY_INT_ARRAY = new Int32Array([]);
    /**
     * The sorted table of all possible symbols. Extracted from the PDF417
     * specification. The index of a symbol in this table corresponds to the
     * index into the codeword table.
     */
    PDF417Common.SYMBOL_TABLE = Int32Array.from([
        0x1025e, 0x1027a, 0x1029e, 0x102bc, 0x102f2, 0x102f4, 0x1032e, 0x1034e, 0x1035c, 0x10396, 0x103a6, 0x103ac,
        0x10422, 0x10428, 0x10436, 0x10442, 0x10444, 0x10448, 0x10450, 0x1045e, 0x10466, 0x1046c, 0x1047a, 0x10482,
        0x1049e, 0x104a0, 0x104bc, 0x104c6, 0x104d8, 0x104ee, 0x104f2, 0x104f4, 0x10504, 0x10508, 0x10510, 0x1051e,
        0x10520, 0x1053c, 0x10540, 0x10578, 0x10586, 0x1058c, 0x10598, 0x105b0, 0x105be, 0x105ce, 0x105dc, 0x105e2,
        0x105e4, 0x105e8, 0x105f6, 0x1062e, 0x1064e, 0x1065c, 0x1068e, 0x1069c, 0x106b8, 0x106de, 0x106fa, 0x10716,
        0x10726, 0x1072c, 0x10746, 0x1074c, 0x10758, 0x1076e, 0x10792, 0x10794, 0x107a2, 0x107a4, 0x107a8, 0x107b6,
        0x10822, 0x10828, 0x10842, 0x10848, 0x10850, 0x1085e, 0x10866, 0x1086c, 0x1087a, 0x10882, 0x10884, 0x10890,
        0x1089e, 0x108a0, 0x108bc, 0x108c6, 0x108cc, 0x108d8, 0x108ee, 0x108f2, 0x108f4, 0x10902, 0x10908, 0x1091e,
        0x10920, 0x1093c, 0x10940, 0x10978, 0x10986, 0x10998, 0x109b0, 0x109be, 0x109ce, 0x109dc, 0x109e2, 0x109e4,
        0x109e8, 0x109f6, 0x10a08, 0x10a10, 0x10a1e, 0x10a20, 0x10a3c, 0x10a40, 0x10a78, 0x10af0, 0x10b06, 0x10b0c,
        0x10b18, 0x10b30, 0x10b3e, 0x10b60, 0x10b7c, 0x10b8e, 0x10b9c, 0x10bb8, 0x10bc2, 0x10bc4, 0x10bc8, 0x10bd0,
        0x10bde, 0x10be6, 0x10bec, 0x10c2e, 0x10c4e, 0x10c5c, 0x10c62, 0x10c64, 0x10c68, 0x10c76, 0x10c8e, 0x10c9c,
        0x10cb8, 0x10cc2, 0x10cc4, 0x10cc8, 0x10cd0, 0x10cde, 0x10ce6, 0x10cec, 0x10cfa, 0x10d0e, 0x10d1c, 0x10d38,
        0x10d70, 0x10d7e, 0x10d82, 0x10d84, 0x10d88, 0x10d90, 0x10d9e, 0x10da0, 0x10dbc, 0x10dc6, 0x10dcc, 0x10dd8,
        0x10dee, 0x10df2, 0x10df4, 0x10e16, 0x10e26, 0x10e2c, 0x10e46, 0x10e58, 0x10e6e, 0x10e86, 0x10e8c, 0x10e98,
        0x10eb0, 0x10ebe, 0x10ece, 0x10edc, 0x10f0a, 0x10f12, 0x10f14, 0x10f22, 0x10f28, 0x10f36, 0x10f42, 0x10f44,
        0x10f48, 0x10f50, 0x10f5e, 0x10f66, 0x10f6c, 0x10fb2, 0x10fb4, 0x11022, 0x11028, 0x11042, 0x11048, 0x11050,
        0x1105e, 0x1107a, 0x11082, 0x11084, 0x11090, 0x1109e, 0x110a0, 0x110bc, 0x110c6, 0x110cc, 0x110d8, 0x110ee,
        0x110f2, 0x110f4, 0x11102, 0x1111e, 0x11120, 0x1113c, 0x11140, 0x11178, 0x11186, 0x11198, 0x111b0, 0x111be,
        0x111ce, 0x111dc, 0x111e2, 0x111e4, 0x111e8, 0x111f6, 0x11208, 0x1121e, 0x11220, 0x11278, 0x112f0, 0x1130c,
        0x11330, 0x1133e, 0x11360, 0x1137c, 0x1138e, 0x1139c, 0x113b8, 0x113c2, 0x113c8, 0x113d0, 0x113de, 0x113e6,
        0x113ec, 0x11408, 0x11410, 0x1141e, 0x11420, 0x1143c, 0x11440, 0x11478, 0x114f0, 0x115e0, 0x1160c, 0x11618,
        0x11630, 0x1163e, 0x11660, 0x1167c, 0x116c0, 0x116f8, 0x1171c, 0x11738, 0x11770, 0x1177e, 0x11782, 0x11784,
        0x11788, 0x11790, 0x1179e, 0x117a0, 0x117bc, 0x117c6, 0x117cc, 0x117d8, 0x117ee, 0x1182e, 0x11834, 0x1184e,
        0x1185c, 0x11862, 0x11864, 0x11868, 0x11876, 0x1188e, 0x1189c, 0x118b8, 0x118c2, 0x118c8, 0x118d0, 0x118de,
        0x118e6, 0x118ec, 0x118fa, 0x1190e, 0x1191c, 0x11938, 0x11970, 0x1197e, 0x11982, 0x11984, 0x11990, 0x1199e,
        0x119a0, 0x119bc, 0x119c6, 0x119cc, 0x119d8, 0x119ee, 0x119f2, 0x119f4, 0x11a0e, 0x11a1c, 0x11a38, 0x11a70,
        0x11a7e, 0x11ae0, 0x11afc, 0x11b08, 0x11b10, 0x11b1e, 0x11b20, 0x11b3c, 0x11b40, 0x11b78, 0x11b8c, 0x11b98,
        0x11bb0, 0x11bbe, 0x11bce, 0x11bdc, 0x11be2, 0x11be4, 0x11be8, 0x11bf6, 0x11c16, 0x11c26, 0x11c2c, 0x11c46,
        0x11c4c, 0x11c58, 0x11c6e, 0x11c86, 0x11c98, 0x11cb0, 0x11cbe, 0x11cce, 0x11cdc, 0x11ce2, 0x11ce4, 0x11ce8,
        0x11cf6, 0x11d06, 0x11d0c, 0x11d18, 0x11d30, 0x11d3e, 0x11d60, 0x11d7c, 0x11d8e, 0x11d9c, 0x11db8, 0x11dc4,
        0x11dc8, 0x11dd0, 0x11dde, 0x11de6, 0x11dec, 0x11dfa, 0x11e0a, 0x11e12, 0x11e14, 0x11e22, 0x11e24, 0x11e28,
        0x11e36, 0x11e42, 0x11e44, 0x11e50, 0x11e5e, 0x11e66, 0x11e6c, 0x11e82, 0x11e84, 0x11e88, 0x11e90, 0x11e9e,
        0x11ea0, 0x11ebc, 0x11ec6, 0x11ecc, 0x11ed8, 0x11eee, 0x11f1a, 0x11f2e, 0x11f32, 0x11f34, 0x11f4e, 0x11f5c,
        0x11f62, 0x11f64, 0x11f68, 0x11f76, 0x12048, 0x1205e, 0x12082, 0x12084, 0x12090, 0x1209e, 0x120a0, 0x120bc,
        0x120d8, 0x120f2, 0x120f4, 0x12108, 0x1211e, 0x12120, 0x1213c, 0x12140, 0x12178, 0x12186, 0x12198, 0x121b0,
        0x121be, 0x121e2, 0x121e4, 0x121e8, 0x121f6, 0x12204, 0x12210, 0x1221e, 0x12220, 0x12278, 0x122f0, 0x12306,
        0x1230c, 0x12330, 0x1233e, 0x12360, 0x1237c, 0x1238e, 0x1239c, 0x123b8, 0x123c2, 0x123c8, 0x123d0, 0x123e6,
        0x123ec, 0x1241e, 0x12420, 0x1243c, 0x124f0, 0x125e0, 0x12618, 0x1263e, 0x12660, 0x1267c, 0x126c0, 0x126f8,
        0x12738, 0x12770, 0x1277e, 0x12782, 0x12784, 0x12790, 0x1279e, 0x127a0, 0x127bc, 0x127c6, 0x127cc, 0x127d8,
        0x127ee, 0x12820, 0x1283c, 0x12840, 0x12878, 0x128f0, 0x129e0, 0x12bc0, 0x12c18, 0x12c30, 0x12c3e, 0x12c60,
        0x12c7c, 0x12cc0, 0x12cf8, 0x12df0, 0x12e1c, 0x12e38, 0x12e70, 0x12e7e, 0x12ee0, 0x12efc, 0x12f04, 0x12f08,
        0x12f10, 0x12f20, 0x12f3c, 0x12f40, 0x12f78, 0x12f86, 0x12f8c, 0x12f98, 0x12fb0, 0x12fbe, 0x12fce, 0x12fdc,
        0x1302e, 0x1304e, 0x1305c, 0x13062, 0x13068, 0x1308e, 0x1309c, 0x130b8, 0x130c2, 0x130c8, 0x130d0, 0x130de,
        0x130ec, 0x130fa, 0x1310e, 0x13138, 0x13170, 0x1317e, 0x13182, 0x13184, 0x13190, 0x1319e, 0x131a0, 0x131bc,
        0x131c6, 0x131cc, 0x131d8, 0x131f2, 0x131f4, 0x1320e, 0x1321c, 0x13270, 0x1327e, 0x132e0, 0x132fc, 0x13308,
        0x1331e, 0x13320, 0x1333c, 0x13340, 0x13378, 0x13386, 0x13398, 0x133b0, 0x133be, 0x133ce, 0x133dc, 0x133e2,
        0x133e4, 0x133e8, 0x133f6, 0x1340e, 0x1341c, 0x13438, 0x13470, 0x1347e, 0x134e0, 0x134fc, 0x135c0, 0x135f8,
        0x13608, 0x13610, 0x1361e, 0x13620, 0x1363c, 0x13640, 0x13678, 0x136f0, 0x1370c, 0x13718, 0x13730, 0x1373e,
        0x13760, 0x1377c, 0x1379c, 0x137b8, 0x137c2, 0x137c4, 0x137c8, 0x137d0, 0x137de, 0x137e6, 0x137ec, 0x13816,
        0x13826, 0x1382c, 0x13846, 0x1384c, 0x13858, 0x1386e, 0x13874, 0x13886, 0x13898, 0x138b0, 0x138be, 0x138ce,
        0x138dc, 0x138e2, 0x138e4, 0x138e8, 0x13906, 0x1390c, 0x13930, 0x1393e, 0x13960, 0x1397c, 0x1398e, 0x1399c,
        0x139b8, 0x139c8, 0x139d0, 0x139de, 0x139e6, 0x139ec, 0x139fa, 0x13a06, 0x13a0c, 0x13a18, 0x13a30, 0x13a3e,
        0x13a60, 0x13a7c, 0x13ac0, 0x13af8, 0x13b0e, 0x13b1c, 0x13b38, 0x13b70, 0x13b7e, 0x13b88, 0x13b90, 0x13b9e,
        0x13ba0, 0x13bbc, 0x13bcc, 0x13bd8, 0x13bee, 0x13bf2, 0x13bf4, 0x13c12, 0x13c14, 0x13c22, 0x13c24, 0x13c28,
        0x13c36, 0x13c42, 0x13c48, 0x13c50, 0x13c5e, 0x13c66, 0x13c6c, 0x13c82, 0x13c84, 0x13c90, 0x13c9e, 0x13ca0,
        0x13cbc, 0x13cc6, 0x13ccc, 0x13cd8, 0x13cee, 0x13d02, 0x13d04, 0x13d08, 0x13d10, 0x13d1e, 0x13d20, 0x13d3c,
        0x13d40, 0x13d78, 0x13d86, 0x13d8c, 0x13d98, 0x13db0, 0x13dbe, 0x13dce, 0x13ddc, 0x13de4, 0x13de8, 0x13df6,
        0x13e1a, 0x13e2e, 0x13e32, 0x13e34, 0x13e4e, 0x13e5c, 0x13e62, 0x13e64, 0x13e68, 0x13e76, 0x13e8e, 0x13e9c,
        0x13eb8, 0x13ec2, 0x13ec4, 0x13ec8, 0x13ed0, 0x13ede, 0x13ee6, 0x13eec, 0x13f26, 0x13f2c, 0x13f3a, 0x13f46,
        0x13f4c, 0x13f58, 0x13f6e, 0x13f72, 0x13f74, 0x14082, 0x1409e, 0x140a0, 0x140bc, 0x14104, 0x14108, 0x14110,
        0x1411e, 0x14120, 0x1413c, 0x14140, 0x14178, 0x1418c, 0x14198, 0x141b0, 0x141be, 0x141e2, 0x141e4, 0x141e8,
        0x14208, 0x14210, 0x1421e, 0x14220, 0x1423c, 0x14240, 0x14278, 0x142f0, 0x14306, 0x1430c, 0x14318, 0x14330,
        0x1433e, 0x14360, 0x1437c, 0x1438e, 0x143c2, 0x143c4, 0x143c8, 0x143d0, 0x143e6, 0x143ec, 0x14408, 0x14410,
        0x1441e, 0x14420, 0x1443c, 0x14440, 0x14478, 0x144f0, 0x145e0, 0x1460c, 0x14618, 0x14630, 0x1463e, 0x14660,
        0x1467c, 0x146c0, 0x146f8, 0x1471c, 0x14738, 0x14770, 0x1477e, 0x14782, 0x14784, 0x14788, 0x14790, 0x147a0,
        0x147bc, 0x147c6, 0x147cc, 0x147d8, 0x147ee, 0x14810, 0x14820, 0x1483c, 0x14840, 0x14878, 0x148f0, 0x149e0,
        0x14bc0, 0x14c30, 0x14c3e, 0x14c60, 0x14c7c, 0x14cc0, 0x14cf8, 0x14df0, 0x14e38, 0x14e70, 0x14e7e, 0x14ee0,
        0x14efc, 0x14f04, 0x14f08, 0x14f10, 0x14f1e, 0x14f20, 0x14f3c, 0x14f40, 0x14f78, 0x14f86, 0x14f8c, 0x14f98,
        0x14fb0, 0x14fce, 0x14fdc, 0x15020, 0x15040, 0x15078, 0x150f0, 0x151e0, 0x153c0, 0x15860, 0x1587c, 0x158c0,
        0x158f8, 0x159f0, 0x15be0, 0x15c70, 0x15c7e, 0x15ce0, 0x15cfc, 0x15dc0, 0x15df8, 0x15e08, 0x15e10, 0x15e20,
        0x15e40, 0x15e78, 0x15ef0, 0x15f0c, 0x15f18, 0x15f30, 0x15f60, 0x15f7c, 0x15f8e, 0x15f9c, 0x15fb8, 0x1604e,
        0x1605c, 0x1608e, 0x1609c, 0x160b8, 0x160c2, 0x160c4, 0x160c8, 0x160de, 0x1610e, 0x1611c, 0x16138, 0x16170,
        0x1617e, 0x16184, 0x16188, 0x16190, 0x1619e, 0x161a0, 0x161bc, 0x161c6, 0x161cc, 0x161d8, 0x161f2, 0x161f4,
        0x1620e, 0x1621c, 0x16238, 0x16270, 0x1627e, 0x162e0, 0x162fc, 0x16304, 0x16308, 0x16310, 0x1631e, 0x16320,
        0x1633c, 0x16340, 0x16378, 0x16386, 0x1638c, 0x16398, 0x163b0, 0x163be, 0x163ce, 0x163dc, 0x163e2, 0x163e4,
        0x163e8, 0x163f6, 0x1640e, 0x1641c, 0x16438, 0x16470, 0x1647e, 0x164e0, 0x164fc, 0x165c0, 0x165f8, 0x16610,
        0x1661e, 0x16620, 0x1663c, 0x16640, 0x16678, 0x166f0, 0x16718, 0x16730, 0x1673e, 0x16760, 0x1677c, 0x1678e,
        0x1679c, 0x167b8, 0x167c2, 0x167c4, 0x167c8, 0x167d0, 0x167de, 0x167e6, 0x167ec, 0x1681c, 0x16838, 0x16870,
        0x168e0, 0x168fc, 0x169c0, 0x169f8, 0x16bf0, 0x16c10, 0x16c1e, 0x16c20, 0x16c3c, 0x16c40, 0x16c78, 0x16cf0,
        0x16de0, 0x16e18, 0x16e30, 0x16e3e, 0x16e60, 0x16e7c, 0x16ec0, 0x16ef8, 0x16f1c, 0x16f38, 0x16f70, 0x16f7e,
        0x16f84, 0x16f88, 0x16f90, 0x16f9e, 0x16fa0, 0x16fbc, 0x16fc6, 0x16fcc, 0x16fd8, 0x17026, 0x1702c, 0x17046,
        0x1704c, 0x17058, 0x1706e, 0x17086, 0x1708c, 0x17098, 0x170b0, 0x170be, 0x170ce, 0x170dc, 0x170e8, 0x17106,
        0x1710c, 0x17118, 0x17130, 0x1713e, 0x17160, 0x1717c, 0x1718e, 0x1719c, 0x171b8, 0x171c2, 0x171c4, 0x171c8,
        0x171d0, 0x171de, 0x171e6, 0x171ec, 0x171fa, 0x17206, 0x1720c, 0x17218, 0x17230, 0x1723e, 0x17260, 0x1727c,
        0x172c0, 0x172f8, 0x1730e, 0x1731c, 0x17338, 0x17370, 0x1737e, 0x17388, 0x17390, 0x1739e, 0x173a0, 0x173bc,
        0x173cc, 0x173d8, 0x173ee, 0x173f2, 0x173f4, 0x1740c, 0x17418, 0x17430, 0x1743e, 0x17460, 0x1747c, 0x174c0,
        0x174f8, 0x175f0, 0x1760e, 0x1761c, 0x17638, 0x17670, 0x1767e, 0x176e0, 0x176fc, 0x17708, 0x17710, 0x1771e,
        0x17720, 0x1773c, 0x17740, 0x17778, 0x17798, 0x177b0, 0x177be, 0x177dc, 0x177e2, 0x177e4, 0x177e8, 0x17822,
        0x17824, 0x17828, 0x17836, 0x17842, 0x17844, 0x17848, 0x17850, 0x1785e, 0x17866, 0x1786c, 0x17882, 0x17884,
        0x17888, 0x17890, 0x1789e, 0x178a0, 0x178bc, 0x178c6, 0x178cc, 0x178d8, 0x178ee, 0x178f2, 0x178f4, 0x17902,
        0x17904, 0x17908, 0x17910, 0x1791e, 0x17920, 0x1793c, 0x17940, 0x17978, 0x17986, 0x1798c, 0x17998, 0x179b0,
        0x179be, 0x179ce, 0x179dc, 0x179e2, 0x179e4, 0x179e8, 0x179f6, 0x17a04, 0x17a08, 0x17a10, 0x17a1e, 0x17a20,
        0x17a3c, 0x17a40, 0x17a78, 0x17af0, 0x17b06, 0x17b0c, 0x17b18, 0x17b30, 0x17b3e, 0x17b60, 0x17b7c, 0x17b8e,
        0x17b9c, 0x17bb8, 0x17bc4, 0x17bc8, 0x17bd0, 0x17bde, 0x17be6, 0x17bec, 0x17c2e, 0x17c32, 0x17c34, 0x17c4e,
        0x17c5c, 0x17c62, 0x17c64, 0x17c68, 0x17c76, 0x17c8e, 0x17c9c, 0x17cb8, 0x17cc2, 0x17cc4, 0x17cc8, 0x17cd0,
        0x17cde, 0x17ce6, 0x17cec, 0x17d0e, 0x17d1c, 0x17d38, 0x17d70, 0x17d82, 0x17d84, 0x17d88, 0x17d90, 0x17d9e,
        0x17da0, 0x17dbc, 0x17dc6, 0x17dcc, 0x17dd8, 0x17dee, 0x17e26, 0x17e2c, 0x17e3a, 0x17e46, 0x17e4c, 0x17e58,
        0x17e6e, 0x17e72, 0x17e74, 0x17e86, 0x17e8c, 0x17e98, 0x17eb0, 0x17ece, 0x17edc, 0x17ee2, 0x17ee4, 0x17ee8,
        0x17ef6, 0x1813a, 0x18172, 0x18174, 0x18216, 0x18226, 0x1823a, 0x1824c, 0x18258, 0x1826e, 0x18272, 0x18274,
        0x18298, 0x182be, 0x182e2, 0x182e4, 0x182e8, 0x182f6, 0x1835e, 0x1837a, 0x183ae, 0x183d6, 0x18416, 0x18426,
        0x1842c, 0x1843a, 0x18446, 0x18458, 0x1846e, 0x18472, 0x18474, 0x18486, 0x184b0, 0x184be, 0x184ce, 0x184dc,
        0x184e2, 0x184e4, 0x184e8, 0x184f6, 0x18506, 0x1850c, 0x18518, 0x18530, 0x1853e, 0x18560, 0x1857c, 0x1858e,
        0x1859c, 0x185b8, 0x185c2, 0x185c4, 0x185c8, 0x185d0, 0x185de, 0x185e6, 0x185ec, 0x185fa, 0x18612, 0x18614,
        0x18622, 0x18628, 0x18636, 0x18642, 0x18650, 0x1865e, 0x1867a, 0x18682, 0x18684, 0x18688, 0x18690, 0x1869e,
        0x186a0, 0x186bc, 0x186c6, 0x186cc, 0x186d8, 0x186ee, 0x186f2, 0x186f4, 0x1872e, 0x1874e, 0x1875c, 0x18796,
        0x187a6, 0x187ac, 0x187d2, 0x187d4, 0x18826, 0x1882c, 0x1883a, 0x18846, 0x1884c, 0x18858, 0x1886e, 0x18872,
        0x18874, 0x18886, 0x18898, 0x188b0, 0x188be, 0x188ce, 0x188dc, 0x188e2, 0x188e4, 0x188e8, 0x188f6, 0x1890c,
        0x18930, 0x1893e, 0x18960, 0x1897c, 0x1898e, 0x189b8, 0x189c2, 0x189c8, 0x189d0, 0x189de, 0x189e6, 0x189ec,
        0x189fa, 0x18a18, 0x18a30, 0x18a3e, 0x18a60, 0x18a7c, 0x18ac0, 0x18af8, 0x18b1c, 0x18b38, 0x18b70, 0x18b7e,
        0x18b82, 0x18b84, 0x18b88, 0x18b90, 0x18b9e, 0x18ba0, 0x18bbc, 0x18bc6, 0x18bcc, 0x18bd8, 0x18bee, 0x18bf2,
        0x18bf4, 0x18c22, 0x18c24, 0x18c28, 0x18c36, 0x18c42, 0x18c48, 0x18c50, 0x18c5e, 0x18c66, 0x18c7a, 0x18c82,
        0x18c84, 0x18c90, 0x18c9e, 0x18ca0, 0x18cbc, 0x18ccc, 0x18cf2, 0x18cf4, 0x18d04, 0x18d08, 0x18d10, 0x18d1e,
        0x18d20, 0x18d3c, 0x18d40, 0x18d78, 0x18d86, 0x18d98, 0x18dce, 0x18de2, 0x18de4, 0x18de8, 0x18e2e, 0x18e32,
        0x18e34, 0x18e4e, 0x18e5c, 0x18e62, 0x18e64, 0x18e68, 0x18e8e, 0x18e9c, 0x18eb8, 0x18ec2, 0x18ec4, 0x18ec8,
        0x18ed0, 0x18efa, 0x18f16, 0x18f26, 0x18f2c, 0x18f46, 0x18f4c, 0x18f58, 0x18f6e, 0x18f8a, 0x18f92, 0x18f94,
        0x18fa2, 0x18fa4, 0x18fa8, 0x18fb6, 0x1902c, 0x1903a, 0x19046, 0x1904c, 0x19058, 0x19072, 0x19074, 0x19086,
        0x19098, 0x190b0, 0x190be, 0x190ce, 0x190dc, 0x190e2, 0x190e8, 0x190f6, 0x19106, 0x1910c, 0x19130, 0x1913e,
        0x19160, 0x1917c, 0x1918e, 0x1919c, 0x191b8, 0x191c2, 0x191c8, 0x191d0, 0x191de, 0x191e6, 0x191ec, 0x191fa,
        0x19218, 0x1923e, 0x19260, 0x1927c, 0x192c0, 0x192f8, 0x19338, 0x19370, 0x1937e, 0x19382, 0x19384, 0x19390,
        0x1939e, 0x193a0, 0x193bc, 0x193c6, 0x193cc, 0x193d8, 0x193ee, 0x193f2, 0x193f4, 0x19430, 0x1943e, 0x19460,
        0x1947c, 0x194c0, 0x194f8, 0x195f0, 0x19638, 0x19670, 0x1967e, 0x196e0, 0x196fc, 0x19702, 0x19704, 0x19708,
        0x19710, 0x19720, 0x1973c, 0x19740, 0x19778, 0x19786, 0x1978c, 0x19798, 0x197b0, 0x197be, 0x197ce, 0x197dc,
        0x197e2, 0x197e4, 0x197e8, 0x19822, 0x19824, 0x19842, 0x19848, 0x19850, 0x1985e, 0x19866, 0x1987a, 0x19882,
        0x19884, 0x19890, 0x1989e, 0x198a0, 0x198bc, 0x198cc, 0x198f2, 0x198f4, 0x19902, 0x19908, 0x1991e, 0x19920,
        0x1993c, 0x19940, 0x19978, 0x19986, 0x19998, 0x199ce, 0x199e2, 0x199e4, 0x199e8, 0x19a08, 0x19a10, 0x19a1e,
        0x19a20, 0x19a3c, 0x19a40, 0x19a78, 0x19af0, 0x19b18, 0x19b3e, 0x19b60, 0x19b9c, 0x19bc2, 0x19bc4, 0x19bc8,
        0x19bd0, 0x19be6, 0x19c2e, 0x19c34, 0x19c4e, 0x19c5c, 0x19c62, 0x19c64, 0x19c68, 0x19c8e, 0x19c9c, 0x19cb8,
        0x19cc2, 0x19cc8, 0x19cd0, 0x19ce6, 0x19cfa, 0x19d0e, 0x19d1c, 0x19d38, 0x19d70, 0x19d7e, 0x19d82, 0x19d84,
        0x19d88, 0x19d90, 0x19da0, 0x19dcc, 0x19df2, 0x19df4, 0x19e16, 0x19e26, 0x19e2c, 0x19e46, 0x19e4c, 0x19e58,
        0x19e74, 0x19e86, 0x19e8c, 0x19e98, 0x19eb0, 0x19ebe, 0x19ece, 0x19ee2, 0x19ee4, 0x19ee8, 0x19f0a, 0x19f12,
        0x19f14, 0x19f22, 0x19f24, 0x19f28, 0x19f42, 0x19f44, 0x19f48, 0x19f50, 0x19f5e, 0x19f6c, 0x19f9a, 0x19fae,
        0x19fb2, 0x19fb4, 0x1a046, 0x1a04c, 0x1a072, 0x1a074, 0x1a086, 0x1a08c, 0x1a098, 0x1a0b0, 0x1a0be, 0x1a0e2,
        0x1a0e4, 0x1a0e8, 0x1a0f6, 0x1a106, 0x1a10c, 0x1a118, 0x1a130, 0x1a13e, 0x1a160, 0x1a17c, 0x1a18e, 0x1a19c,
        0x1a1b8, 0x1a1c2, 0x1a1c4, 0x1a1c8, 0x1a1d0, 0x1a1de, 0x1a1e6, 0x1a1ec, 0x1a218, 0x1a230, 0x1a23e, 0x1a260,
        0x1a27c, 0x1a2c0, 0x1a2f8, 0x1a31c, 0x1a338, 0x1a370, 0x1a37e, 0x1a382, 0x1a384, 0x1a388, 0x1a390, 0x1a39e,
        0x1a3a0, 0x1a3bc, 0x1a3c6, 0x1a3cc, 0x1a3d8, 0x1a3ee, 0x1a3f2, 0x1a3f4, 0x1a418, 0x1a430, 0x1a43e, 0x1a460,
        0x1a47c, 0x1a4c0, 0x1a4f8, 0x1a5f0, 0x1a61c, 0x1a638, 0x1a670, 0x1a67e, 0x1a6e0, 0x1a6fc, 0x1a702, 0x1a704,
        0x1a708, 0x1a710, 0x1a71e, 0x1a720, 0x1a73c, 0x1a740, 0x1a778, 0x1a786, 0x1a78c, 0x1a798, 0x1a7b0, 0x1a7be,
        0x1a7ce, 0x1a7dc, 0x1a7e2, 0x1a7e4, 0x1a7e8, 0x1a830, 0x1a860, 0x1a87c, 0x1a8c0, 0x1a8f8, 0x1a9f0, 0x1abe0,
        0x1ac70, 0x1ac7e, 0x1ace0, 0x1acfc, 0x1adc0, 0x1adf8, 0x1ae04, 0x1ae08, 0x1ae10, 0x1ae20, 0x1ae3c, 0x1ae40,
        0x1ae78, 0x1aef0, 0x1af06, 0x1af0c, 0x1af18, 0x1af30, 0x1af3e, 0x1af60, 0x1af7c, 0x1af8e, 0x1af9c, 0x1afb8,
        0x1afc4, 0x1afc8, 0x1afd0, 0x1afde, 0x1b042, 0x1b05e, 0x1b07a, 0x1b082, 0x1b084, 0x1b088, 0x1b090, 0x1b09e,
        0x1b0a0, 0x1b0bc, 0x1b0cc, 0x1b0f2, 0x1b0f4, 0x1b102, 0x1b104, 0x1b108, 0x1b110, 0x1b11e, 0x1b120, 0x1b13c,
        0x1b140, 0x1b178, 0x1b186, 0x1b198, 0x1b1ce, 0x1b1e2, 0x1b1e4, 0x1b1e8, 0x1b204, 0x1b208, 0x1b210, 0x1b21e,
        0x1b220, 0x1b23c, 0x1b240, 0x1b278, 0x1b2f0, 0x1b30c, 0x1b33e, 0x1b360, 0x1b39c, 0x1b3c2, 0x1b3c4, 0x1b3c8,
        0x1b3d0, 0x1b3e6, 0x1b410, 0x1b41e, 0x1b420, 0x1b43c, 0x1b440, 0x1b478, 0x1b4f0, 0x1b5e0, 0x1b618, 0x1b660,
        0x1b67c, 0x1b6c0, 0x1b738, 0x1b782, 0x1b784, 0x1b788, 0x1b790, 0x1b79e, 0x1b7a0, 0x1b7cc, 0x1b82e, 0x1b84e,
        0x1b85c, 0x1b88e, 0x1b89c, 0x1b8b8, 0x1b8c2, 0x1b8c4, 0x1b8c8, 0x1b8d0, 0x1b8e6, 0x1b8fa, 0x1b90e, 0x1b91c,
        0x1b938, 0x1b970, 0x1b97e, 0x1b982, 0x1b984, 0x1b988, 0x1b990, 0x1b99e, 0x1b9a0, 0x1b9cc, 0x1b9f2, 0x1b9f4,
        0x1ba0e, 0x1ba1c, 0x1ba38, 0x1ba70, 0x1ba7e, 0x1bae0, 0x1bafc, 0x1bb08, 0x1bb10, 0x1bb20, 0x1bb3c, 0x1bb40,
        0x1bb98, 0x1bbce, 0x1bbe2, 0x1bbe4, 0x1bbe8, 0x1bc16, 0x1bc26, 0x1bc2c, 0x1bc46, 0x1bc4c, 0x1bc58, 0x1bc72,
        0x1bc74, 0x1bc86, 0x1bc8c, 0x1bc98, 0x1bcb0, 0x1bcbe, 0x1bcce, 0x1bce2, 0x1bce4, 0x1bce8, 0x1bd06, 0x1bd0c,
        0x1bd18, 0x1bd30, 0x1bd3e, 0x1bd60, 0x1bd7c, 0x1bd9c, 0x1bdc2, 0x1bdc4, 0x1bdc8, 0x1bdd0, 0x1bde6, 0x1bdfa,
        0x1be12, 0x1be14, 0x1be22, 0x1be24, 0x1be28, 0x1be42, 0x1be44, 0x1be48, 0x1be50, 0x1be5e, 0x1be66, 0x1be82,
        0x1be84, 0x1be88, 0x1be90, 0x1be9e, 0x1bea0, 0x1bebc, 0x1becc, 0x1bef4, 0x1bf1a, 0x1bf2e, 0x1bf32, 0x1bf34,
        0x1bf4e, 0x1bf5c, 0x1bf62, 0x1bf64, 0x1bf68, 0x1c09a, 0x1c0b2, 0x1c0b4, 0x1c11a, 0x1c132, 0x1c134, 0x1c162,
        0x1c164, 0x1c168, 0x1c176, 0x1c1ba, 0x1c21a, 0x1c232, 0x1c234, 0x1c24e, 0x1c25c, 0x1c262, 0x1c264, 0x1c268,
        0x1c276, 0x1c28e, 0x1c2c2, 0x1c2c4, 0x1c2c8, 0x1c2d0, 0x1c2de, 0x1c2e6, 0x1c2ec, 0x1c2fa, 0x1c316, 0x1c326,
        0x1c33a, 0x1c346, 0x1c34c, 0x1c372, 0x1c374, 0x1c41a, 0x1c42e, 0x1c432, 0x1c434, 0x1c44e, 0x1c45c, 0x1c462,
        0x1c464, 0x1c468, 0x1c476, 0x1c48e, 0x1c49c, 0x1c4b8, 0x1c4c2, 0x1c4c8, 0x1c4d0, 0x1c4de, 0x1c4e6, 0x1c4ec,
        0x1c4fa, 0x1c51c, 0x1c538, 0x1c570, 0x1c57e, 0x1c582, 0x1c584, 0x1c588, 0x1c590, 0x1c59e, 0x1c5a0, 0x1c5bc,
        0x1c5c6, 0x1c5cc, 0x1c5d8, 0x1c5ee, 0x1c5f2, 0x1c5f4, 0x1c616, 0x1c626, 0x1c62c, 0x1c63a, 0x1c646, 0x1c64c,
        0x1c658, 0x1c66e, 0x1c672, 0x1c674, 0x1c686, 0x1c68c, 0x1c698, 0x1c6b0, 0x1c6be, 0x1c6ce, 0x1c6dc, 0x1c6e2,
        0x1c6e4, 0x1c6e8, 0x1c712, 0x1c714, 0x1c722, 0x1c728, 0x1c736, 0x1c742, 0x1c744, 0x1c748, 0x1c750, 0x1c75e,
        0x1c766, 0x1c76c, 0x1c77a, 0x1c7ae, 0x1c7d6, 0x1c7ea, 0x1c81a, 0x1c82e, 0x1c832, 0x1c834, 0x1c84e, 0x1c85c,
        0x1c862, 0x1c864, 0x1c868, 0x1c876, 0x1c88e, 0x1c89c, 0x1c8b8, 0x1c8c2, 0x1c8c8, 0x1c8d0, 0x1c8de, 0x1c8e6,
        0x1c8ec, 0x1c8fa, 0x1c90e, 0x1c938, 0x1c970, 0x1c97e, 0x1c982, 0x1c984, 0x1c990, 0x1c99e, 0x1c9a0, 0x1c9bc,
        0x1c9c6, 0x1c9cc, 0x1c9d8, 0x1c9ee, 0x1c9f2, 0x1c9f4, 0x1ca38, 0x1ca70, 0x1ca7e, 0x1cae0, 0x1cafc, 0x1cb02,
        0x1cb04, 0x1cb08, 0x1cb10, 0x1cb20, 0x1cb3c, 0x1cb40, 0x1cb78, 0x1cb86, 0x1cb8c, 0x1cb98, 0x1cbb0, 0x1cbbe,
        0x1cbce, 0x1cbdc, 0x1cbe2, 0x1cbe4, 0x1cbe8, 0x1cbf6, 0x1cc16, 0x1cc26, 0x1cc2c, 0x1cc3a, 0x1cc46, 0x1cc58,
        0x1cc72, 0x1cc74, 0x1cc86, 0x1ccb0, 0x1ccbe, 0x1ccce, 0x1cce2, 0x1cce4, 0x1cce8, 0x1cd06, 0x1cd0c, 0x1cd18,
        0x1cd30, 0x1cd3e, 0x1cd60, 0x1cd7c, 0x1cd9c, 0x1cdc2, 0x1cdc4, 0x1cdc8, 0x1cdd0, 0x1cdde, 0x1cde6, 0x1cdfa,
        0x1ce22, 0x1ce28, 0x1ce42, 0x1ce50, 0x1ce5e, 0x1ce66, 0x1ce7a, 0x1ce82, 0x1ce84, 0x1ce88, 0x1ce90, 0x1ce9e,
        0x1cea0, 0x1cebc, 0x1cecc, 0x1cef2, 0x1cef4, 0x1cf2e, 0x1cf32, 0x1cf34, 0x1cf4e, 0x1cf5c, 0x1cf62, 0x1cf64,
        0x1cf68, 0x1cf96, 0x1cfa6, 0x1cfac, 0x1cfca, 0x1cfd2, 0x1cfd4, 0x1d02e, 0x1d032, 0x1d034, 0x1d04e, 0x1d05c,
        0x1d062, 0x1d064, 0x1d068, 0x1d076, 0x1d08e, 0x1d09c, 0x1d0b8, 0x1d0c2, 0x1d0c4, 0x1d0c8, 0x1d0d0, 0x1d0de,
        0x1d0e6, 0x1d0ec, 0x1d0fa, 0x1d11c, 0x1d138, 0x1d170, 0x1d17e, 0x1d182, 0x1d184, 0x1d188, 0x1d190, 0x1d19e,
        0x1d1a0, 0x1d1bc, 0x1d1c6, 0x1d1cc, 0x1d1d8, 0x1d1ee, 0x1d1f2, 0x1d1f4, 0x1d21c, 0x1d238, 0x1d270, 0x1d27e,
        0x1d2e0, 0x1d2fc, 0x1d302, 0x1d304, 0x1d308, 0x1d310, 0x1d31e, 0x1d320, 0x1d33c, 0x1d340, 0x1d378, 0x1d386,
        0x1d38c, 0x1d398, 0x1d3b0, 0x1d3be, 0x1d3ce, 0x1d3dc, 0x1d3e2, 0x1d3e4, 0x1d3e8, 0x1d3f6, 0x1d470, 0x1d47e,
        0x1d4e0, 0x1d4fc, 0x1d5c0, 0x1d5f8, 0x1d604, 0x1d608, 0x1d610, 0x1d620, 0x1d640, 0x1d678, 0x1d6f0, 0x1d706,
        0x1d70c, 0x1d718, 0x1d730, 0x1d73e, 0x1d760, 0x1d77c, 0x1d78e, 0x1d79c, 0x1d7b8, 0x1d7c2, 0x1d7c4, 0x1d7c8,
        0x1d7d0, 0x1d7de, 0x1d7e6, 0x1d7ec, 0x1d826, 0x1d82c, 0x1d83a, 0x1d846, 0x1d84c, 0x1d858, 0x1d872, 0x1d874,
        0x1d886, 0x1d88c, 0x1d898, 0x1d8b0, 0x1d8be, 0x1d8ce, 0x1d8e2, 0x1d8e4, 0x1d8e8, 0x1d8f6, 0x1d90c, 0x1d918,
        0x1d930, 0x1d93e, 0x1d960, 0x1d97c, 0x1d99c, 0x1d9c2, 0x1d9c4, 0x1d9c8, 0x1d9d0, 0x1d9e6, 0x1d9fa, 0x1da0c,
        0x1da18, 0x1da30, 0x1da3e, 0x1da60, 0x1da7c, 0x1dac0, 0x1daf8, 0x1db38, 0x1db82, 0x1db84, 0x1db88, 0x1db90,
        0x1db9e, 0x1dba0, 0x1dbcc, 0x1dbf2, 0x1dbf4, 0x1dc22, 0x1dc42, 0x1dc44, 0x1dc48, 0x1dc50, 0x1dc5e, 0x1dc66,
        0x1dc7a, 0x1dc82, 0x1dc84, 0x1dc88, 0x1dc90, 0x1dc9e, 0x1dca0, 0x1dcbc, 0x1dccc, 0x1dcf2, 0x1dcf4, 0x1dd04,
        0x1dd08, 0x1dd10, 0x1dd1e, 0x1dd20, 0x1dd3c, 0x1dd40, 0x1dd78, 0x1dd86, 0x1dd98, 0x1ddce, 0x1dde2, 0x1dde4,
        0x1dde8, 0x1de2e, 0x1de32, 0x1de34, 0x1de4e, 0x1de5c, 0x1de62, 0x1de64, 0x1de68, 0x1de8e, 0x1de9c, 0x1deb8,
        0x1dec2, 0x1dec4, 0x1dec8, 0x1ded0, 0x1dee6, 0x1defa, 0x1df16, 0x1df26, 0x1df2c, 0x1df46, 0x1df4c, 0x1df58,
        0x1df72, 0x1df74, 0x1df8a, 0x1df92, 0x1df94, 0x1dfa2, 0x1dfa4, 0x1dfa8, 0x1e08a, 0x1e092, 0x1e094, 0x1e0a2,
        0x1e0a4, 0x1e0a8, 0x1e0b6, 0x1e0da, 0x1e10a, 0x1e112, 0x1e114, 0x1e122, 0x1e124, 0x1e128, 0x1e136, 0x1e142,
        0x1e144, 0x1e148, 0x1e150, 0x1e166, 0x1e16c, 0x1e17a, 0x1e19a, 0x1e1b2, 0x1e1b4, 0x1e20a, 0x1e212, 0x1e214,
        0x1e222, 0x1e224, 0x1e228, 0x1e236, 0x1e242, 0x1e248, 0x1e250, 0x1e25e, 0x1e266, 0x1e26c, 0x1e27a, 0x1e282,
        0x1e284, 0x1e288, 0x1e290, 0x1e2a0, 0x1e2bc, 0x1e2c6, 0x1e2cc, 0x1e2d8, 0x1e2ee, 0x1e2f2, 0x1e2f4, 0x1e31a,
        0x1e332, 0x1e334, 0x1e35c, 0x1e362, 0x1e364, 0x1e368, 0x1e3ba, 0x1e40a, 0x1e412, 0x1e414, 0x1e422, 0x1e428,
        0x1e436, 0x1e442, 0x1e448, 0x1e450, 0x1e45e, 0x1e466, 0x1e46c, 0x1e47a, 0x1e482, 0x1e484, 0x1e490, 0x1e49e,
        0x1e4a0, 0x1e4bc, 0x1e4c6, 0x1e4cc, 0x1e4d8, 0x1e4ee, 0x1e4f2, 0x1e4f4, 0x1e502, 0x1e504, 0x1e508, 0x1e510,
        0x1e51e, 0x1e520, 0x1e53c, 0x1e540, 0x1e578, 0x1e586, 0x1e58c, 0x1e598, 0x1e5b0, 0x1e5be, 0x1e5ce, 0x1e5dc,
        0x1e5e2, 0x1e5e4, 0x1e5e8, 0x1e5f6, 0x1e61a, 0x1e62e, 0x1e632, 0x1e634, 0x1e64e, 0x1e65c, 0x1e662, 0x1e668,
        0x1e68e, 0x1e69c, 0x1e6b8, 0x1e6c2, 0x1e6c4, 0x1e6c8, 0x1e6d0, 0x1e6e6, 0x1e6fa, 0x1e716, 0x1e726, 0x1e72c,
        0x1e73a, 0x1e746, 0x1e74c, 0x1e758, 0x1e772, 0x1e774, 0x1e792, 0x1e794, 0x1e7a2, 0x1e7a4, 0x1e7a8, 0x1e7b6,
        0x1e812, 0x1e814, 0x1e822, 0x1e824, 0x1e828, 0x1e836, 0x1e842, 0x1e844, 0x1e848, 0x1e850, 0x1e85e, 0x1e866,
        0x1e86c, 0x1e87a, 0x1e882, 0x1e884, 0x1e888, 0x1e890, 0x1e89e, 0x1e8a0, 0x1e8bc, 0x1e8c6, 0x1e8cc, 0x1e8d8,
        0x1e8ee, 0x1e8f2, 0x1e8f4, 0x1e902, 0x1e904, 0x1e908, 0x1e910, 0x1e920, 0x1e93c, 0x1e940, 0x1e978, 0x1e986,
        0x1e98c, 0x1e998, 0x1e9b0, 0x1e9be, 0x1e9ce, 0x1e9dc, 0x1e9e2, 0x1e9e4, 0x1e9e8, 0x1e9f6, 0x1ea04, 0x1ea08,
        0x1ea10, 0x1ea20, 0x1ea40, 0x1ea78, 0x1eaf0, 0x1eb06, 0x1eb0c, 0x1eb18, 0x1eb30, 0x1eb3e, 0x1eb60, 0x1eb7c,
        0x1eb8e, 0x1eb9c, 0x1ebb8, 0x1ebc2, 0x1ebc4, 0x1ebc8, 0x1ebd0, 0x1ebde, 0x1ebe6, 0x1ebec, 0x1ec1a, 0x1ec2e,
        0x1ec32, 0x1ec34, 0x1ec4e, 0x1ec5c, 0x1ec62, 0x1ec64, 0x1ec68, 0x1ec8e, 0x1ec9c, 0x1ecb8, 0x1ecc2, 0x1ecc4,
        0x1ecc8, 0x1ecd0, 0x1ece6, 0x1ecfa, 0x1ed0e, 0x1ed1c, 0x1ed38, 0x1ed70, 0x1ed7e, 0x1ed82, 0x1ed84, 0x1ed88,
        0x1ed90, 0x1ed9e, 0x1eda0, 0x1edcc, 0x1edf2, 0x1edf4, 0x1ee16, 0x1ee26, 0x1ee2c, 0x1ee3a, 0x1ee46, 0x1ee4c,
        0x1ee58, 0x1ee6e, 0x1ee72, 0x1ee74, 0x1ee86, 0x1ee8c, 0x1ee98, 0x1eeb0, 0x1eebe, 0x1eece, 0x1eedc, 0x1eee2,
        0x1eee4, 0x1eee8, 0x1ef12, 0x1ef22, 0x1ef24, 0x1ef28, 0x1ef36, 0x1ef42, 0x1ef44, 0x1ef48, 0x1ef50, 0x1ef5e,
        0x1ef66, 0x1ef6c, 0x1ef7a, 0x1efae, 0x1efb2, 0x1efb4, 0x1efd6, 0x1f096, 0x1f0a6, 0x1f0ac, 0x1f0ba, 0x1f0ca,
        0x1f0d2, 0x1f0d4, 0x1f116, 0x1f126, 0x1f12c, 0x1f13a, 0x1f146, 0x1f14c, 0x1f158, 0x1f16e, 0x1f172, 0x1f174,
        0x1f18a, 0x1f192, 0x1f194, 0x1f1a2, 0x1f1a4, 0x1f1a8, 0x1f1da, 0x1f216, 0x1f226, 0x1f22c, 0x1f23a, 0x1f246,
        0x1f258, 0x1f26e, 0x1f272, 0x1f274, 0x1f286, 0x1f28c, 0x1f298, 0x1f2b0, 0x1f2be, 0x1f2ce, 0x1f2dc, 0x1f2e2,
        0x1f2e4, 0x1f2e8, 0x1f2f6, 0x1f30a, 0x1f312, 0x1f314, 0x1f322, 0x1f328, 0x1f342, 0x1f344, 0x1f348, 0x1f350,
        0x1f35e, 0x1f366, 0x1f37a, 0x1f39a, 0x1f3ae, 0x1f3b2, 0x1f3b4, 0x1f416, 0x1f426, 0x1f42c, 0x1f43a, 0x1f446,
        0x1f44c, 0x1f458, 0x1f46e, 0x1f472, 0x1f474, 0x1f486, 0x1f48c, 0x1f498, 0x1f4b0, 0x1f4be, 0x1f4ce, 0x1f4dc,
        0x1f4e2, 0x1f4e4, 0x1f4e8, 0x1f4f6, 0x1f506, 0x1f50c, 0x1f518, 0x1f530, 0x1f53e, 0x1f560, 0x1f57c, 0x1f58e,
        0x1f59c, 0x1f5b8, 0x1f5c2, 0x1f5c4, 0x1f5c8, 0x1f5d0, 0x1f5de, 0x1f5e6, 0x1f5ec, 0x1f5fa, 0x1f60a, 0x1f612,
        0x1f614, 0x1f622, 0x1f624, 0x1f628, 0x1f636, 0x1f642, 0x1f644, 0x1f648, 0x1f650, 0x1f65e, 0x1f666, 0x1f67a,
        0x1f682, 0x1f684, 0x1f688, 0x1f690, 0x1f69e, 0x1f6a0, 0x1f6bc, 0x1f6cc, 0x1f6f2, 0x1f6f4, 0x1f71a, 0x1f72e,
        0x1f732, 0x1f734, 0x1f74e, 0x1f75c, 0x1f762, 0x1f764, 0x1f768, 0x1f776, 0x1f796, 0x1f7a6, 0x1f7ac, 0x1f7ba,
        0x1f7d2, 0x1f7d4, 0x1f89a, 0x1f8ae, 0x1f8b2, 0x1f8b4, 0x1f8d6, 0x1f8ea, 0x1f91a, 0x1f92e, 0x1f932, 0x1f934,
        0x1f94e, 0x1f95c, 0x1f962, 0x1f964, 0x1f968, 0x1f976, 0x1f996, 0x1f9a6, 0x1f9ac, 0x1f9ba, 0x1f9ca, 0x1f9d2,
        0x1f9d4, 0x1fa1a, 0x1fa2e, 0x1fa32, 0x1fa34, 0x1fa4e, 0x1fa5c, 0x1fa62, 0x1fa64, 0x1fa68, 0x1fa76, 0x1fa8e,
        0x1fa9c, 0x1fab8, 0x1fac2, 0x1fac4, 0x1fac8, 0x1fad0, 0x1fade, 0x1fae6, 0x1faec, 0x1fb16, 0x1fb26, 0x1fb2c,
        0x1fb3a, 0x1fb46, 0x1fb4c, 0x1fb58, 0x1fb6e, 0x1fb72, 0x1fb74, 0x1fb8a, 0x1fb92, 0x1fb94, 0x1fba2, 0x1fba4,
        0x1fba8, 0x1fbb6, 0x1fbda
    ]);
    /**
     * This table contains to codewords for all symbols.
     */
    PDF417Common.CODEWORD_TABLE = Int32Array.from([
        2627, 1819, 2622, 2621, 1813, 1812, 2729, 2724, 2723, 2779, 2774, 2773, 902, 896, 908, 868, 865, 861, 859, 2511,
        873, 871, 1780, 835, 2493, 825, 2491, 842, 837, 844, 1764, 1762, 811, 810, 809, 2483, 807, 2482, 806, 2480, 815,
        814, 813, 812, 2484, 817, 816, 1745, 1744, 1742, 1746, 2655, 2637, 2635, 2626, 2625, 2623, 2628, 1820, 2752,
        2739, 2737, 2728, 2727, 2725, 2730, 2785, 2783, 2778, 2777, 2775, 2780, 787, 781, 747, 739, 736, 2413, 754, 752,
        1719, 692, 689, 681, 2371, 678, 2369, 700, 697, 694, 703, 1688, 1686, 642, 638, 2343, 631, 2341, 627, 2338, 651,
        646, 643, 2345, 654, 652, 1652, 1650, 1647, 1654, 601, 599, 2322, 596, 2321, 594, 2319, 2317, 611, 610, 608, 606,
        2324, 603, 2323, 615, 614, 612, 1617, 1616, 1614, 1612, 616, 1619, 1618, 2575, 2538, 2536, 905, 901, 898, 909,
        2509, 2507, 2504, 870, 867, 864, 860, 2512, 875, 872, 1781, 2490, 2489, 2487, 2485, 1748, 836, 834, 832, 830,
        2494, 827, 2492, 843, 841, 839, 845, 1765, 1763, 2701, 2676, 2674, 2653, 2648, 2656, 2634, 2633, 2631, 2629,
        1821, 2638, 2636, 2770, 2763, 2761, 2750, 2745, 2753, 2736, 2735, 2733, 2731, 1848, 2740, 2738, 2786, 2784, 591,
        588, 576, 569, 566, 2296, 1590, 537, 534, 526, 2276, 522, 2274, 545, 542, 539, 548, 1572, 1570, 481, 2245, 466,
        2242, 462, 2239, 492, 485, 482, 2249, 496, 494, 1534, 1531, 1528, 1538, 413, 2196, 406, 2191, 2188, 425, 419,
        2202, 415, 2199, 432, 430, 427, 1472, 1467, 1464, 433, 1476, 1474, 368, 367, 2160, 365, 2159, 362, 2157, 2155,
        2152, 378, 377, 375, 2166, 372, 2165, 369, 2162, 383, 381, 379, 2168, 1419, 1418, 1416, 1414, 385, 1411, 384,
        1423, 1422, 1420, 1424, 2461, 802, 2441, 2439, 790, 786, 783, 794, 2409, 2406, 2403, 750, 742, 738, 2414, 756,
        753, 1720, 2367, 2365, 2362, 2359, 1663, 693, 691, 684, 2373, 680, 2370, 702, 699, 696, 704, 1690, 1687, 2337,
        2336, 2334, 2332, 1624, 2329, 1622, 640, 637, 2344, 634, 2342, 630, 2340, 650, 648, 645, 2346, 655, 653, 1653,
        1651, 1649, 1655, 2612, 2597, 2595, 2571, 2568, 2565, 2576, 2534, 2529, 2526, 1787, 2540, 2537, 907, 904, 900,
        910, 2503, 2502, 2500, 2498, 1768, 2495, 1767, 2510, 2508, 2506, 869, 866, 863, 2513, 876, 874, 1782, 2720, 2713,
        2711, 2697, 2694, 2691, 2702, 2672, 2670, 2664, 1828, 2678, 2675, 2647, 2646, 2644, 2642, 1823, 2639, 1822, 2654,
        2652, 2650, 2657, 2771, 1855, 2765, 2762, 1850, 1849, 2751, 2749, 2747, 2754, 353, 2148, 344, 342, 336, 2142,
        332, 2140, 345, 1375, 1373, 306, 2130, 299, 2128, 295, 2125, 319, 314, 311, 2132, 1354, 1352, 1349, 1356, 262,
        257, 2101, 253, 2096, 2093, 274, 273, 267, 2107, 263, 2104, 280, 278, 275, 1316, 1311, 1308, 1320, 1318, 2052,
        202, 2050, 2044, 2040, 219, 2063, 212, 2060, 208, 2055, 224, 221, 2066, 1260, 1258, 1252, 231, 1248, 229, 1266,
        1264, 1261, 1268, 155, 1998, 153, 1996, 1994, 1991, 1988, 165, 164, 2007, 162, 2006, 159, 2003, 2000, 172, 171,
        169, 2012, 166, 2010, 1186, 1184, 1182, 1179, 175, 1176, 173, 1192, 1191, 1189, 1187, 176, 1194, 1193, 2313,
        2307, 2305, 592, 589, 2294, 2292, 2289, 578, 572, 568, 2297, 580, 1591, 2272, 2267, 2264, 1547, 538, 536, 529,
        2278, 525, 2275, 547, 544, 541, 1574, 1571, 2237, 2235, 2229, 1493, 2225, 1489, 478, 2247, 470, 2244, 465, 2241,
        493, 488, 484, 2250, 498, 495, 1536, 1533, 1530, 1539, 2187, 2186, 2184, 2182, 1432, 2179, 1430, 2176, 1427, 414,
        412, 2197, 409, 2195, 405, 2193, 2190, 426, 424, 421, 2203, 418, 2201, 431, 429, 1473, 1471, 1469, 1466, 434,
        1477, 1475, 2478, 2472, 2470, 2459, 2457, 2454, 2462, 803, 2437, 2432, 2429, 1726, 2443, 2440, 792, 789, 785,
        2401, 2399, 2393, 1702, 2389, 1699, 2411, 2408, 2405, 745, 741, 2415, 758, 755, 1721, 2358, 2357, 2355, 2353,
        1661, 2350, 1660, 2347, 1657, 2368, 2366, 2364, 2361, 1666, 690, 687, 2374, 683, 2372, 701, 698, 705, 1691, 1689,
        2619, 2617, 2610, 2608, 2605, 2613, 2593, 2588, 2585, 1803, 2599, 2596, 2563, 2561, 2555, 1797, 2551, 1795, 2573,
        2570, 2567, 2577, 2525, 2524, 2522, 2520, 1786, 2517, 1785, 2514, 1783, 2535, 2533, 2531, 2528, 1788, 2541, 2539,
        906, 903, 911, 2721, 1844, 2715, 2712, 1838, 1836, 2699, 2696, 2693, 2703, 1827, 1826, 1824, 2673, 2671, 2669,
        2666, 1829, 2679, 2677, 1858, 1857, 2772, 1854, 1853, 1851, 1856, 2766, 2764, 143, 1987, 139, 1986, 135, 133,
        131, 1984, 128, 1983, 125, 1981, 138, 137, 136, 1985, 1133, 1132, 1130, 112, 110, 1974, 107, 1973, 104, 1971,
        1969, 122, 121, 119, 117, 1977, 114, 1976, 124, 1115, 1114, 1112, 1110, 1117, 1116, 84, 83, 1953, 81, 1952, 78,
        1950, 1948, 1945, 94, 93, 91, 1959, 88, 1958, 85, 1955, 99, 97, 95, 1961, 1086, 1085, 1083, 1081, 1078, 100,
        1090, 1089, 1087, 1091, 49, 47, 1917, 44, 1915, 1913, 1910, 1907, 59, 1926, 56, 1925, 53, 1922, 1919, 66, 64,
        1931, 61, 1929, 1042, 1040, 1038, 71, 1035, 70, 1032, 68, 1048, 1047, 1045, 1043, 1050, 1049, 12, 10, 1869, 1867,
        1864, 1861, 21, 1880, 19, 1877, 1874, 1871, 28, 1888, 25, 1886, 22, 1883, 982, 980, 977, 974, 32, 30, 991, 989,
        987, 984, 34, 995, 994, 992, 2151, 2150, 2147, 2146, 2144, 356, 355, 354, 2149, 2139, 2138, 2136, 2134, 1359,
        343, 341, 338, 2143, 335, 2141, 348, 347, 346, 1376, 1374, 2124, 2123, 2121, 2119, 1326, 2116, 1324, 310, 308,
        305, 2131, 302, 2129, 298, 2127, 320, 318, 316, 313, 2133, 322, 321, 1355, 1353, 1351, 1357, 2092, 2091, 2089,
        2087, 1276, 2084, 1274, 2081, 1271, 259, 2102, 256, 2100, 252, 2098, 2095, 272, 269, 2108, 266, 2106, 281, 279,
        277, 1317, 1315, 1313, 1310, 282, 1321, 1319, 2039, 2037, 2035, 2032, 1203, 2029, 1200, 1197, 207, 2053, 205,
        2051, 201, 2049, 2046, 2043, 220, 218, 2064, 215, 2062, 211, 2059, 228, 226, 223, 2069, 1259, 1257, 1254, 232,
        1251, 230, 1267, 1265, 1263, 2316, 2315, 2312, 2311, 2309, 2314, 2304, 2303, 2301, 2299, 1593, 2308, 2306, 590,
        2288, 2287, 2285, 2283, 1578, 2280, 1577, 2295, 2293, 2291, 579, 577, 574, 571, 2298, 582, 581, 1592, 2263, 2262,
        2260, 2258, 1545, 2255, 1544, 2252, 1541, 2273, 2271, 2269, 2266, 1550, 535, 532, 2279, 528, 2277, 546, 543, 549,
        1575, 1573, 2224, 2222, 2220, 1486, 2217, 1485, 2214, 1482, 1479, 2238, 2236, 2234, 2231, 1496, 2228, 1492, 480,
        477, 2248, 473, 2246, 469, 2243, 490, 487, 2251, 497, 1537, 1535, 1532, 2477, 2476, 2474, 2479, 2469, 2468, 2466,
        2464, 1730, 2473, 2471, 2453, 2452, 2450, 2448, 1729, 2445, 1728, 2460, 2458, 2456, 2463, 805, 804, 2428, 2427,
        2425, 2423, 1725, 2420, 1724, 2417, 1722, 2438, 2436, 2434, 2431, 1727, 2444, 2442, 793, 791, 788, 795, 2388,
        2386, 2384, 1697, 2381, 1696, 2378, 1694, 1692, 2402, 2400, 2398, 2395, 1703, 2392, 1701, 2412, 2410, 2407, 751,
        748, 744, 2416, 759, 757, 1807, 2620, 2618, 1806, 1805, 2611, 2609, 2607, 2614, 1802, 1801, 1799, 2594, 2592,
        2590, 2587, 1804, 2600, 2598, 1794, 1793, 1791, 1789, 2564, 2562, 2560, 2557, 1798, 2554, 1796, 2574, 2572, 2569,
        2578, 1847, 1846, 2722, 1843, 1842, 1840, 1845, 2716, 2714, 1835, 1834, 1832, 1830, 1839, 1837, 2700, 2698, 2695,
        2704, 1817, 1811, 1810, 897, 862, 1777, 829, 826, 838, 1760, 1758, 808, 2481, 1741, 1740, 1738, 1743, 2624, 1818,
        2726, 2776, 782, 740, 737, 1715, 686, 679, 695, 1682, 1680, 639, 628, 2339, 647, 644, 1645, 1643, 1640, 1648,
        602, 600, 597, 595, 2320, 593, 2318, 609, 607, 604, 1611, 1610, 1608, 1606, 613, 1615, 1613, 2328, 926, 924, 892,
        886, 899, 857, 850, 2505, 1778, 824, 823, 821, 819, 2488, 818, 2486, 833, 831, 828, 840, 1761, 1759, 2649, 2632,
        2630, 2746, 2734, 2732, 2782, 2781, 570, 567, 1587, 531, 527, 523, 540, 1566, 1564, 476, 467, 463, 2240, 486,
        483, 1524, 1521, 1518, 1529, 411, 403, 2192, 399, 2189, 423, 416, 1462, 1457, 1454, 428, 1468, 1465, 2210, 366,
        363, 2158, 360, 2156, 357, 2153, 376, 373, 370, 2163, 1410, 1409, 1407, 1405, 382, 1402, 380, 1417, 1415, 1412,
        1421, 2175, 2174, 777, 774, 771, 784, 732, 725, 722, 2404, 743, 1716, 676, 674, 668, 2363, 665, 2360, 685, 1684,
        1681, 626, 624, 622, 2335, 620, 2333, 617, 2330, 641, 635, 649, 1646, 1644, 1642, 2566, 928, 925, 2530, 2527,
        894, 891, 888, 2501, 2499, 2496, 858, 856, 854, 851, 1779, 2692, 2668, 2665, 2645, 2643, 2640, 2651, 2768, 2759,
        2757, 2744, 2743, 2741, 2748, 352, 1382, 340, 337, 333, 1371, 1369, 307, 300, 296, 2126, 315, 312, 1347, 1342,
        1350, 261, 258, 250, 2097, 246, 2094, 271, 268, 264, 1306, 1301, 1298, 276, 1312, 1309, 2115, 203, 2048, 195,
        2045, 191, 2041, 213, 209, 2056, 1246, 1244, 1238, 225, 1234, 222, 1256, 1253, 1249, 1262, 2080, 2079, 154, 1997,
        150, 1995, 147, 1992, 1989, 163, 160, 2004, 156, 2001, 1175, 1174, 1172, 1170, 1167, 170, 1164, 167, 1185, 1183,
        1180, 1177, 174, 1190, 1188, 2025, 2024, 2022, 587, 586, 564, 559, 556, 2290, 573, 1588, 520, 518, 512, 2268,
        508, 2265, 530, 1568, 1565, 461, 457, 2233, 450, 2230, 446, 2226, 479, 471, 489, 1526, 1523, 1520, 397, 395,
        2185, 392, 2183, 389, 2180, 2177, 410, 2194, 402, 422, 1463, 1461, 1459, 1456, 1470, 2455, 799, 2433, 2430, 779,
        776, 773, 2397, 2394, 2390, 734, 728, 724, 746, 1717, 2356, 2354, 2351, 2348, 1658, 677, 675, 673, 670, 667, 688,
        1685, 1683, 2606, 2589, 2586, 2559, 2556, 2552, 927, 2523, 2521, 2518, 2515, 1784, 2532, 895, 893, 890, 2718,
        2709, 2707, 2689, 2687, 2684, 2663, 2662, 2660, 2658, 1825, 2667, 2769, 1852, 2760, 2758, 142, 141, 1139, 1138,
        134, 132, 129, 126, 1982, 1129, 1128, 1126, 1131, 113, 111, 108, 105, 1972, 101, 1970, 120, 118, 115, 1109, 1108,
        1106, 1104, 123, 1113, 1111, 82, 79, 1951, 75, 1949, 72, 1946, 92, 89, 86, 1956, 1077, 1076, 1074, 1072, 98,
        1069, 96, 1084, 1082, 1079, 1088, 1968, 1967, 48, 45, 1916, 42, 1914, 39, 1911, 1908, 60, 57, 54, 1923, 50, 1920,
        1031, 1030, 1028, 1026, 67, 1023, 65, 1020, 62, 1041, 1039, 1036, 1033, 69, 1046, 1044, 1944, 1943, 1941, 11, 9,
        1868, 7, 1865, 1862, 1859, 20, 1878, 16, 1875, 13, 1872, 970, 968, 966, 963, 29, 960, 26, 23, 983, 981, 978, 975,
        33, 971, 31, 990, 988, 985, 1906, 1904, 1902, 993, 351, 2145, 1383, 331, 330, 328, 326, 2137, 323, 2135, 339,
        1372, 1370, 294, 293, 291, 289, 2122, 286, 2120, 283, 2117, 309, 303, 317, 1348, 1346, 1344, 245, 244, 242, 2090,
        239, 2088, 236, 2085, 2082, 260, 2099, 249, 270, 1307, 1305, 1303, 1300, 1314, 189, 2038, 186, 2036, 183, 2033,
        2030, 2026, 206, 198, 2047, 194, 216, 1247, 1245, 1243, 1240, 227, 1237, 1255, 2310, 2302, 2300, 2286, 2284,
        2281, 565, 563, 561, 558, 575, 1589, 2261, 2259, 2256, 2253, 1542, 521, 519, 517, 514, 2270, 511, 533, 1569,
        1567, 2223, 2221, 2218, 2215, 1483, 2211, 1480, 459, 456, 453, 2232, 449, 474, 491, 1527, 1525, 1522, 2475, 2467,
        2465, 2451, 2449, 2446, 801, 800, 2426, 2424, 2421, 2418, 1723, 2435, 780, 778, 775, 2387, 2385, 2382, 2379,
        1695, 2375, 1693, 2396, 735, 733, 730, 727, 749, 1718, 2616, 2615, 2604, 2603, 2601, 2584, 2583, 2581, 2579,
        1800, 2591, 2550, 2549, 2547, 2545, 1792, 2542, 1790, 2558, 929, 2719, 1841, 2710, 2708, 1833, 1831, 2690, 2688,
        2686, 1815, 1809, 1808, 1774, 1756, 1754, 1737, 1736, 1734, 1739, 1816, 1711, 1676, 1674, 633, 629, 1638, 1636,
        1633, 1641, 598, 1605, 1604, 1602, 1600, 605, 1609, 1607, 2327, 887, 853, 1775, 822, 820, 1757, 1755, 1584, 524,
        1560, 1558, 468, 464, 1514, 1511, 1508, 1519, 408, 404, 400, 1452, 1447, 1444, 417, 1458, 1455, 2208, 364, 361,
        358, 2154, 1401, 1400, 1398, 1396, 374, 1393, 371, 1408, 1406, 1403, 1413, 2173, 2172, 772, 726, 723, 1712, 672,
        669, 666, 682, 1678, 1675, 625, 623, 621, 618, 2331, 636, 632, 1639, 1637, 1635, 920, 918, 884, 880, 889, 849,
        848, 847, 846, 2497, 855, 852, 1776, 2641, 2742, 2787, 1380, 334, 1367, 1365, 301, 297, 1340, 1338, 1335, 1343,
        255, 251, 247, 1296, 1291, 1288, 265, 1302, 1299, 2113, 204, 196, 192, 2042, 1232, 1230, 1224, 214, 1220, 210,
        1242, 1239, 1235, 1250, 2077, 2075, 151, 148, 1993, 144, 1990, 1163, 1162, 1160, 1158, 1155, 161, 1152, 157,
        1173, 1171, 1168, 1165, 168, 1181, 1178, 2021, 2020, 2018, 2023, 585, 560, 557, 1585, 516, 509, 1562, 1559, 458,
        447, 2227, 472, 1516, 1513, 1510, 398, 396, 393, 390, 2181, 386, 2178, 407, 1453, 1451, 1449, 1446, 420, 1460,
        2209, 769, 764, 720, 712, 2391, 729, 1713, 664, 663, 661, 659, 2352, 656, 2349, 671, 1679, 1677, 2553, 922, 919,
        2519, 2516, 885, 883, 881, 2685, 2661, 2659, 2767, 2756, 2755, 140, 1137, 1136, 130, 127, 1125, 1124, 1122, 1127,
        109, 106, 102, 1103, 1102, 1100, 1098, 116, 1107, 1105, 1980, 80, 76, 73, 1947, 1068, 1067, 1065, 1063, 90, 1060,
        87, 1075, 1073, 1070, 1080, 1966, 1965, 46, 43, 40, 1912, 36, 1909, 1019, 1018, 1016, 1014, 58, 1011, 55, 1008,
        51, 1029, 1027, 1024, 1021, 63, 1037, 1034, 1940, 1939, 1937, 1942, 8, 1866, 4, 1863, 1, 1860, 956, 954, 952,
        949, 946, 17, 14, 969, 967, 964, 961, 27, 957, 24, 979, 976, 972, 1901, 1900, 1898, 1896, 986, 1905, 1903, 350,
        349, 1381, 329, 327, 324, 1368, 1366, 292, 290, 287, 284, 2118, 304, 1341, 1339, 1337, 1345, 243, 240, 237, 2086,
        233, 2083, 254, 1297, 1295, 1293, 1290, 1304, 2114, 190, 187, 184, 2034, 180, 2031, 177, 2027, 199, 1233, 1231,
        1229, 1226, 217, 1223, 1241, 2078, 2076, 584, 555, 554, 552, 550, 2282, 562, 1586, 507, 506, 504, 502, 2257, 499,
        2254, 515, 1563, 1561, 445, 443, 441, 2219, 438, 2216, 435, 2212, 460, 454, 475, 1517, 1515, 1512, 2447, 798,
        797, 2422, 2419, 770, 768, 766, 2383, 2380, 2376, 721, 719, 717, 714, 731, 1714, 2602, 2582, 2580, 2548, 2546,
        2543, 923, 921, 2717, 2706, 2705, 2683, 2682, 2680, 1771, 1752, 1750, 1733, 1732, 1731, 1735, 1814, 1707, 1670,
        1668, 1631, 1629, 1626, 1634, 1599, 1598, 1596, 1594, 1603, 1601, 2326, 1772, 1753, 1751, 1581, 1554, 1552, 1504,
        1501, 1498, 1509, 1442, 1437, 1434, 401, 1448, 1445, 2206, 1392, 1391, 1389, 1387, 1384, 359, 1399, 1397, 1394,
        1404, 2171, 2170, 1708, 1672, 1669, 619, 1632, 1630, 1628, 1773, 1378, 1363, 1361, 1333, 1328, 1336, 1286, 1281,
        1278, 248, 1292, 1289, 2111, 1218, 1216, 1210, 197, 1206, 193, 1228, 1225, 1221, 1236, 2073, 2071, 1151, 1150,
        1148, 1146, 152, 1143, 149, 1140, 145, 1161, 1159, 1156, 1153, 158, 1169, 1166, 2017, 2016, 2014, 2019, 1582,
        510, 1556, 1553, 452, 448, 1506, 1500, 394, 391, 387, 1443, 1441, 1439, 1436, 1450, 2207, 765, 716, 713, 1709,
        662, 660, 657, 1673, 1671, 916, 914, 879, 878, 877, 882, 1135, 1134, 1121, 1120, 1118, 1123, 1097, 1096, 1094,
        1092, 103, 1101, 1099, 1979, 1059, 1058, 1056, 1054, 77, 1051, 74, 1066, 1064, 1061, 1071, 1964, 1963, 1007,
        1006, 1004, 1002, 999, 41, 996, 37, 1017, 1015, 1012, 1009, 52, 1025, 1022, 1936, 1935, 1933, 1938, 942, 940,
        938, 935, 932, 5, 2, 955, 953, 950, 947, 18, 943, 15, 965, 962, 958, 1895, 1894, 1892, 1890, 973, 1899, 1897,
        1379, 325, 1364, 1362, 288, 285, 1334, 1332, 1330, 241, 238, 234, 1287, 1285, 1283, 1280, 1294, 2112, 188, 185,
        181, 178, 2028, 1219, 1217, 1215, 1212, 200, 1209, 1227, 2074, 2072, 583, 553, 551, 1583, 505, 503, 500, 513,
        1557, 1555, 444, 442, 439, 436, 2213, 455, 451, 1507, 1505, 1502, 796, 763, 762, 760, 767, 711, 710, 708, 706,
        2377, 718, 715, 1710, 2544, 917, 915, 2681, 1627, 1597, 1595, 2325, 1769, 1749, 1747, 1499, 1438, 1435, 2204,
        1390, 1388, 1385, 1395, 2169, 2167, 1704, 1665, 1662, 1625, 1623, 1620, 1770, 1329, 1282, 1279, 2109, 1214, 1207,
        1222, 2068, 2065, 1149, 1147, 1144, 1141, 146, 1157, 1154, 2013, 2011, 2008, 2015, 1579, 1549, 1546, 1495, 1487,
        1433, 1431, 1428, 1425, 388, 1440, 2205, 1705, 658, 1667, 1664, 1119, 1095, 1093, 1978, 1057, 1055, 1052, 1062,
        1962, 1960, 1005, 1003, 1000, 997, 38, 1013, 1010, 1932, 1930, 1927, 1934, 941, 939, 936, 933, 6, 930, 3, 951,
        948, 944, 1889, 1887, 1884, 1881, 959, 1893, 1891, 35, 1377, 1360, 1358, 1327, 1325, 1322, 1331, 1277, 1275,
        1272, 1269, 235, 1284, 2110, 1205, 1204, 1201, 1198, 182, 1195, 179, 1213, 2070, 2067, 1580, 501, 1551, 1548,
        440, 437, 1497, 1494, 1490, 1503, 761, 709, 707, 1706, 913, 912, 2198, 1386, 2164, 2161, 1621, 1766, 2103, 1208,
        2058, 2054, 1145, 1142, 2005, 2002, 1999, 2009, 1488, 1429, 1426, 2200, 1698, 1659, 1656, 1975, 1053, 1957, 1954,
        1001, 998, 1924, 1921, 1918, 1928, 937, 934, 931, 1879, 1876, 1873, 1870, 945, 1885, 1882, 1323, 1273, 1270,
        2105, 1202, 1199, 1196, 1211, 2061, 2057, 1576, 1543, 1540, 1484, 1481, 1478, 1491, 1700
    ]);

    /*
    * Copyright 2012 ZXing authors
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *      http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
    /**
     * @author Sean Owen
     * @see com.google.zxing.common.reedsolomon.GenericGFPoly
     */
    /*final*/ class ModulusPoly {
        constructor(field, coefficients) {
            if (coefficients.length === 0) {
                throw new IllegalArgumentException();
            }
            this.field = field;
            let coefficientsLength = /*int*/ coefficients.length;
            if (coefficientsLength > 1 && coefficients[0] === 0) {
                // Leading term must be non-zero for anything except the constant polynomial "0"
                let firstNonZero = /*int*/ 1;
                while (firstNonZero < coefficientsLength && coefficients[firstNonZero] === 0) {
                    firstNonZero++;
                }
                if (firstNonZero === coefficientsLength) {
                    this.coefficients = new Int32Array([0]);
                }
                else {
                    this.coefficients = new Int32Array(coefficientsLength - firstNonZero);
                    System.arraycopy(coefficients, firstNonZero, this.coefficients, 0, this.coefficients.length);
                }
            }
            else {
                this.coefficients = coefficients;
            }
        }
        getCoefficients() {
            return this.coefficients;
        }
        /**
         * @return degree of this polynomial
         */
        getDegree() {
            return this.coefficients.length - 1;
        }
        /**
         * @return true iff this polynomial is the monomial "0"
         */
        isZero() {
            return this.coefficients[0] === 0;
        }
        /**
         * @return coefficient of x^degree term in this polynomial
         */
        getCoefficient(degree) {
            return this.coefficients[this.coefficients.length - 1 - degree];
        }
        /**
         * @return evaluation of this polynomial at a given point
         */
        evaluateAt(a) {
            if (a === 0) {
                // Just return the x^0 coefficient
                return this.getCoefficient(0);
            }
            if (a === 1) {
                // Just the sum of the coefficients
                let sum = /*int*/ 0;
                for (let coefficient /*int*/ of this.coefficients) {
                    sum = this.field.add(sum, coefficient);
                }
                return sum;
            }
            let result = /*int*/ this.coefficients[0];
            let size = /*int*/ this.coefficients.length;
            for (let i /*int*/ = 1; i < size; i++) {
                result = this.field.add(this.field.multiply(a, result), this.coefficients[i]);
            }
            return result;
        }
        add(other) {
            if (!this.field.equals(other.field)) {
                throw new IllegalArgumentException('ModulusPolys do not have same ModulusGF field');
            }
            if (this.isZero()) {
                return other;
            }
            if (other.isZero()) {
                return this;
            }
            let smallerCoefficients = this.coefficients;
            let largerCoefficients = other.coefficients;
            if (smallerCoefficients.length > largerCoefficients.length) {
                let temp = smallerCoefficients;
                smallerCoefficients = largerCoefficients;
                largerCoefficients = temp;
            }
            let sumDiff = new Int32Array(largerCoefficients.length);
            let lengthDiff = /*int*/ largerCoefficients.length - smallerCoefficients.length;
            // Copy high-order terms only found in higher-degree polynomial's coefficients
            System.arraycopy(largerCoefficients, 0, sumDiff, 0, lengthDiff);
            for (let i /*int*/ = lengthDiff; i < largerCoefficients.length; i++) {
                sumDiff[i] = this.field.add(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
            }
            return new ModulusPoly(this.field, sumDiff);
        }
        subtract(other) {
            if (!this.field.equals(other.field)) {
                throw new IllegalArgumentException('ModulusPolys do not have same ModulusGF field');
            }
            if (other.isZero()) {
                return this;
            }
            return this.add(other.negative());
        }
        multiply(other) {
            if (other instanceof ModulusPoly) {
                return this.multiplyOther(other);
            }
            return this.multiplyScalar(other);
        }
        multiplyOther(other) {
            if (!this.field.equals(other.field)) {
                throw new IllegalArgumentException('ModulusPolys do not have same ModulusGF field');
            }
            if (this.isZero() || other.isZero()) {
                // return this.field.getZero();
                return new ModulusPoly(this.field, new Int32Array([0]));
            }
            let aCoefficients = this.coefficients;
            let aLength = /*int*/ aCoefficients.length;
            let bCoefficients = other.coefficients;
            let bLength = /*int*/ bCoefficients.length;
            let product = new Int32Array(aLength + bLength - 1);
            for (let i /*int*/ = 0; i < aLength; i++) {
                let aCoeff = /*int*/ aCoefficients[i];
                for (let j /*int*/ = 0; j < bLength; j++) {
                    product[i + j] = this.field.add(product[i + j], this.field.multiply(aCoeff, bCoefficients[j]));
                }
            }
            return new ModulusPoly(this.field, product);
        }
        negative() {
            let size = /*int*/ this.coefficients.length;
            let negativeCoefficients = new Int32Array(size);
            for (let i /*int*/ = 0; i < size; i++) {
                negativeCoefficients[i] = this.field.subtract(0, this.coefficients[i]);
            }
            return new ModulusPoly(this.field, negativeCoefficients);
        }
        multiplyScalar(scalar) {
            if (scalar === 0) {
                return new ModulusPoly(this.field, new Int32Array([0]));
            }
            if (scalar === 1) {
                return this;
            }
            let size = /*int*/ this.coefficients.length;
            let product = new Int32Array(size);
            for (let i /*int*/ = 0; i < size; i++) {
                product[i] = this.field.multiply(this.coefficients[i], scalar);
            }
            return new ModulusPoly(this.field, product);
        }
        multiplyByMonomial(degree, coefficient) {
            if (degree < 0) {
                throw new IllegalArgumentException();
            }
            if (coefficient === 0) {
                return new ModulusPoly(this.field, new Int32Array([0]));
            }
            let size = /*int*/ this.coefficients.length;
            let product = new Int32Array(size + degree);
            for (let i /*int*/ = 0; i < size; i++) {
                product[i] = this.field.multiply(this.coefficients[i], coefficient);
            }
            return new ModulusPoly(this.field, product);
        }
        /*
        ModulusPoly[] divide(other: ModulusPoly) {
          if (!field.equals(other.field)) {
            throw new IllegalArgumentException("ModulusPolys do not have same ModulusGF field");
          }
          if (other.isZero()) {
            throw new IllegalArgumentException("Divide by 0");
          }
      
          let quotient: ModulusPoly = field.getZero();
          let remainder: ModulusPoly = this;
      
          let denominatorLeadingTerm: /*int/ number = other.getCoefficient(other.getDegree());
          let inverseDenominatorLeadingTerm: /*int/ number = field.inverse(denominatorLeadingTerm);
      
          while (remainder.getDegree() >= other.getDegree() && !remainder.isZero()) {
            let degreeDifference: /*int/ number = remainder.getDegree() - other.getDegree();
            let scale: /*int/ number = field.multiply(remainder.getCoefficient(remainder.getDegree()), inverseDenominatorLeadingTerm);
            let term: ModulusPoly = other.multiplyByMonomial(degreeDifference, scale);
            let iterationQuotient: ModulusPoly = field.buildMonomial(degreeDifference, scale);
            quotient = quotient.add(iterationQuotient);
            remainder = remainder.subtract(term);
          }
      
          return new ModulusPoly[] { quotient, remainder };
        }
        */
        // @Override
        toString() {
            let result = new StringBuilder( /*8 * this.getDegree()*/); // dynamic string size in JS
            for (let degree /*int*/ = this.getDegree(); degree >= 0; degree--) {
                let coefficient = /*int*/ this.getCoefficient(degree);
                if (coefficient !== 0) {
                    if (coefficient < 0) {
                        result.append(' - ');
                        coefficient = -coefficient;
                    }
                    else {
                        if (result.length() > 0) {
                            result.append(' + ');
                        }
                    }
                    if (degree === 0 || coefficient !== 1) {
                        result.append(coefficient);
                    }
                    if (degree !== 0) {
                        if (degree === 1) {
                            result.append('x');
                        }
                        else {
                            result.append('x^');
                            result.append(degree);
                        }
                    }
                }
            }
            return result.toString();
        }
    }

    class ModulusBase {
        add(a, b) {
            return (a + b) % this.modulus;
        }
        subtract(a, b) {
            return (this.modulus + a - b) % this.modulus;
        }
        exp(a) {
            return this.expTable[a];
        }
        log(a) {
            if (a === 0) {
                throw new IllegalArgumentException();
            }
            return this.logTable[a];
        }
        inverse(a) {
            if (a === 0) {
                throw new ArithmeticException();
            }
            return this.expTable[this.modulus - this.logTable[a] - 1];
        }
        multiply(a, b) {
            if (a === 0 || b === 0) {
                return 0;
            }
            return this.expTable[(this.logTable[a] + this.logTable[b]) % (this.modulus - 1)];
        }
        getSize() {
            return this.modulus;
        }
        equals(o) {
            return o === this;
        }
    }

    /*
     * Copyright 2012 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * <p>A field based on powers of a generator integer, modulo some modulus.</p>
     *
     * @author Sean Owen
     * @see com.google.zxing.common.reedsolomon.GenericGF
     */
    /*public final*/ class ModulusGF extends ModulusBase {
        // private /*final*/ modulus: /*int*/ number;
        constructor(modulus, generator) {
            super();
            this.modulus = modulus;
            this.expTable = new Int32Array(modulus);
            this.logTable = new Int32Array(modulus);
            let x = /*int*/ 1;
            for (let i /*int*/ = 0; i < modulus; i++) {
                this.expTable[i] = x;
                x = (x * generator) % modulus;
            }
            for (let i /*int*/ = 0; i < modulus - 1; i++) {
                this.logTable[this.expTable[i]] = i;
            }
            // logTable[0] == 0 but this should never be used
            this.zero = new ModulusPoly(this, new Int32Array([0]));
            this.one = new ModulusPoly(this, new Int32Array([1]));
        }
        getZero() {
            return this.zero;
        }
        getOne() {
            return this.one;
        }
        buildMonomial(degree, coefficient) {
            if (degree < 0) {
                throw new IllegalArgumentException();
            }
            if (coefficient === 0) {
                return this.zero;
            }
            let coefficients = new Int32Array(degree + 1);
            coefficients[0] = coefficient;
            return new ModulusPoly(this, coefficients);
        }
    }
    ModulusGF.PDF417_GF = new ModulusGF(PDF417Common.NUMBER_OF_CODEWORDS, 3);

    /*
    * Copyright 2013 ZXing authors
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *      http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
    /**
     * @author Guenther Grau
     * @author creatale GmbH (christoph.schulz@creatale.de)
     */
    /*final*/ class PDF417CodewordDecoder {
        /* @note
         * this action have to be performed before first use of class
         * - static constructor
         * working with 32bit float (based from Java logic)
        */
        static initialize() {
            // Pre-computes the symbol ratio table.
            for ( /*int*/let i = 0; i < PDF417Common.SYMBOL_TABLE.length; i++) {
                let currentSymbol = PDF417Common.SYMBOL_TABLE[i];
                let currentBit = currentSymbol & 0x1;
                for ( /*int*/let j = 0; j < PDF417Common.BARS_IN_MODULE; j++) {
                    let size = 0.0;
                    while ((currentSymbol & 0x1) === currentBit) {
                        size += 1.0;
                        currentSymbol >>= 1;
                    }
                    currentBit = currentSymbol & 0x1;
                    if (!PDF417CodewordDecoder.RATIOS_TABLE[i]) {
                        PDF417CodewordDecoder.RATIOS_TABLE[i] = new Array(PDF417Common.BARS_IN_MODULE);
                    }
                    PDF417CodewordDecoder.RATIOS_TABLE[i][PDF417Common.BARS_IN_MODULE - j - 1] = Math.fround(size / PDF417Common.MODULES_IN_CODEWORD);
                }
            }
            this.bSymbolTableReady = true;
        }
        static getDecodedValue(moduleBitCount) {
            let decodedValue = PDF417CodewordDecoder.getDecodedCodewordValue(PDF417CodewordDecoder.sampleBitCounts(moduleBitCount));
            if (decodedValue !== -1) {
                return decodedValue;
            }
            return PDF417CodewordDecoder.getClosestDecodedValue(moduleBitCount);
        }
        static sampleBitCounts(moduleBitCount) {
            let bitCountSum = MathUtils.sum(moduleBitCount);
            let result = new Int32Array(PDF417Common.BARS_IN_MODULE);
            let bitCountIndex = 0;
            let sumPreviousBits = 0;
            for ( /*int*/let i = 0; i < PDF417Common.MODULES_IN_CODEWORD; i++) {
                let sampleIndex = bitCountSum / (2 * PDF417Common.MODULES_IN_CODEWORD) +
                    (i * bitCountSum) / PDF417Common.MODULES_IN_CODEWORD;
                if (sumPreviousBits + moduleBitCount[bitCountIndex] <= sampleIndex) {
                    sumPreviousBits += moduleBitCount[bitCountIndex];
                    bitCountIndex++;
                }
                result[bitCountIndex]++;
            }
            return result;
        }
        static getDecodedCodewordValue(moduleBitCount) {
            let decodedValue = PDF417CodewordDecoder.getBitValue(moduleBitCount);
            return PDF417Common.getCodeword(decodedValue) === -1 ? -1 : decodedValue;
        }
        static getBitValue(moduleBitCount) {
            let result = /*long*/ 0;
            for (let /*int*/ i = 0; i < moduleBitCount.length; i++) {
                for ( /*int*/let bit = 0; bit < moduleBitCount[i]; bit++) {
                    result = (result << 1) | (i % 2 === 0 ? 1 : 0);
                }
            }
            return Math.trunc(result);
        }
        // working with 32bit float (as in Java)
        static getClosestDecodedValue(moduleBitCount) {
            let bitCountSum = MathUtils.sum(moduleBitCount);
            let bitCountRatios = new Array(PDF417Common.BARS_IN_MODULE);
            if (bitCountSum > 1) {
                for (let /*int*/ i = 0; i < bitCountRatios.length; i++) {
                    bitCountRatios[i] = Math.fround(moduleBitCount[i] / bitCountSum);
                }
            }
            let bestMatchError = Float.MAX_VALUE;
            let bestMatch = -1;
            if (!this.bSymbolTableReady) {
                PDF417CodewordDecoder.initialize();
            }
            for ( /*int*/let j = 0; j < PDF417CodewordDecoder.RATIOS_TABLE.length; j++) {
                let error = 0.0;
                let ratioTableRow = PDF417CodewordDecoder.RATIOS_TABLE[j];
                for ( /*int*/let k = 0; k < PDF417Common.BARS_IN_MODULE; k++) {
                    let diff = Math.fround(ratioTableRow[k] - bitCountRatios[k]);
                    error += Math.fround(diff * diff);
                    if (error >= bestMatchError) {
                        break;
                    }
                }
                if (error < bestMatchError) {
                    bestMatchError = error;
                    bestMatch = PDF417Common.SYMBOL_TABLE[j];
                }
            }
            return bestMatch;
        }
    }
    // flag that the table is ready for use
    PDF417CodewordDecoder.bSymbolTableReady = false;
    PDF417CodewordDecoder.RATIOS_TABLE = new Array(PDF417Common.SYMBOL_TABLE.length).map(x => x = new Array(PDF417Common.BARS_IN_MODULE));

    /*
     * Copyright 2013 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    // package com.google.zxing.pdf417;
    /**
     * @author Guenther Grau
     */
    /*public final*/ class PDF417ResultMetadata {
        constructor() {
            this.segmentCount = -1;
            this.fileSize = -1;
            this.timestamp = -1;
            this.checksum = -1;
        }
        /**
         * The Segment ID represents the segment of the whole file distributed over different symbols.
         *
         * @return File segment index
         */
        getSegmentIndex() {
            return this.segmentIndex;
        }
        setSegmentIndex(segmentIndex) {
            this.segmentIndex = segmentIndex;
        }
        /**
         * Is the same for each related PDF417 symbol
         *
         * @return File ID
         */
        getFileId() {
            return this.fileId;
        }
        setFileId(fileId) {
            this.fileId = fileId;
        }
        /**
         * @return always null
         * @deprecated use dedicated already parsed fields
         */
        //   @Deprecated
        getOptionalData() {
            return this.optionalData;
        }
        /**
         * @param optionalData old optional data format as int array
         * @deprecated parse and use new fields
         */
        //   @Deprecated
        setOptionalData(optionalData) {
            this.optionalData = optionalData;
        }
        /**
         * @return true if it is the last segment
         */
        isLastSegment() {
            return this.lastSegment;
        }
        setLastSegment(lastSegment) {
            this.lastSegment = lastSegment;
        }
        /**
         * @return count of segments, -1 if not set
         */
        getSegmentCount() {
            return this.segmentCount;
        }
        setSegmentCount(segmentCount /*int*/) {
            this.segmentCount = segmentCount;
        }
        getSender() {
            return this.sender || null;
        }
        setSender(sender) {
            this.sender = sender;
        }
        getAddressee() {
            return this.addressee || null;
        }
        setAddressee(addressee) {
            this.addressee = addressee;
        }
        /**
         * Filename of the encoded file
         *
         * @return filename
         */
        getFileName() {
            return this.fileName;
        }
        setFileName(fileName) {
            this.fileName = fileName;
        }
        /**
         * filesize in bytes of the encoded file
         *
         * @return filesize in bytes, -1 if not set
         */
        getFileSize() {
            return this.fileSize;
        }
        setFileSize(fileSize /*long*/) {
            this.fileSize = fileSize;
        }
        /**
         * 16-bit CRC checksum using CCITT-16
         *
         * @return crc checksum, -1 if not set
         */
        getChecksum() {
            return this.checksum;
        }
        setChecksum(checksum /*int*/) {
            this.checksum = checksum;
        }
        /**
         * unix epock timestamp, elapsed seconds since 1970-01-01
         *
         * @return elapsed seconds, -1 if not set
         */
        getTimestamp() {
            return this.timestamp;
        }
        setTimestamp(timestamp /*long*/) {
            this.timestamp = timestamp;
        }
    }

    /**
     * Ponyfill for Java's Long class.
     */
    class Long {
        /**
         * Parses a string to a number, since JS has no really Int64.
         *
         * @param num Numeric string.
         * @param radix Destination radix.
         */
        static parseLong(num, radix = undefined) {
            return parseInt(num, radix);
        }
    }

    /**
     * Custom Error class of type Exception.
     */
    class NullPointerException extends Exception {
    }

    /*
     * Copyright (c) 1994, 2004, Oracle and/or its affiliates. All rights reserved.
     * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
     *
     * This code is free software; you can redistribute it and/or modify it
     * under the terms of the GNU General Public License version 2 only, as
     * published by the Free Software Foundation.  Oracle designates this
     * particular file as subject to the "Classpath" exception as provided
     * by Oracle in the LICENSE file that accompanied this code.
     *
     * This code is distributed in the hope that it will be useful, but WITHOUT
     * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
     * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
     * version 2 for more details (a copy is included in the LICENSE file that
     * accompanied this code).
     *
     * You should have received a copy of the GNU General Public License version
     * 2 along with this work; if not, write to the Free Software Foundation,
     * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
     *
     * Please contact Oracle, 500 Oracle Parkway, Redwood Shores, CA 94065 USA
     * or visit www.oracle.com if you need additional information or have any
     * questions.
     */
    // package java.io;
    /**
     * This abstract class is the superclass of all classes representing
     * an output stream of bytes. An output stream accepts output bytes
     * and sends them to some sink.
     * <p>
     * Applications that need to define a subclass of
     * <code>OutputStream</code> must always provide at least a method
     * that writes one byte of output.
     *
     * @author  Arthur van Hoff
     * @see     java.io.BufferedOutputStream
     * @see     java.io.ByteArrayOutputStream
     * @see     java.io.DataOutputStream
     * @see     java.io.FilterOutputStream
     * @see     java.io.InputStream
     * @see     java.io.OutputStream#write(int)
     * @since   JDK1.0
     */
    /*public*/ class OutputStream /*implements Closeable, Flushable*/ {
        /**
         * Writes <code>b.length</code> bytes from the specified byte array
         * to this output stream. The general contract for <code>write(b)</code>
         * is that it should have exactly the same effect as the call
         * <code>write(b, 0, b.length)</code>.
         *
         * @param      b   the data.
         * @exception  IOException  if an I/O error occurs.
         * @see        java.io.OutputStream#write(byte[], int, int)
         */
        writeBytes(b) {
            this.writeBytesOffset(b, 0, b.length);
        }
        /**
         * Writes <code>len</code> bytes from the specified byte array
         * starting at offset <code>off</code> to this output stream.
         * The general contract for <code>write(b, off, len)</code> is that
         * some of the bytes in the array <code>b</code> are written to the
         * output stream in order; element <code>b[off]</code> is the first
         * byte written and <code>b[off+len-1]</code> is the last byte written
         * by this operation.
         * <p>
         * The <code>write</code> method of <code>OutputStream</code> calls
         * the write method of one argument on each of the bytes to be
         * written out. Subclasses are encouraged to override this method and
         * provide a more efficient implementation.
         * <p>
         * If <code>b</code> is <code>null</code>, a
         * <code>NullPointerException</code> is thrown.
         * <p>
         * If <code>off</code> is negative, or <code>len</code> is negative, or
         * <code>off+len</code> is greater than the length of the array
         * <code>b</code>, then an <tt>IndexOutOfBoundsException</tt> is thrown.
         *
         * @param      b     the data.
         * @param      off   the start offset in the data.
         * @param      len   the number of bytes to write.
         * @exception  IOException  if an I/O error occurs. In particular,
         *             an <code>IOException</code> is thrown if the output
         *             stream is closed.
         */
        writeBytesOffset(b, off, len) {
            if (b == null) {
                throw new NullPointerException();
            }
            else if ((off < 0) || (off > b.length) || (len < 0) ||
                ((off + len) > b.length) || ((off + len) < 0)) {
                throw new IndexOutOfBoundsException();
            }
            else if (len === 0) {
                return;
            }
            for (let i = 0; i < len; i++) {
                this.write(b[off + i]);
            }
        }
        /**
         * Flushes this output stream and forces any buffered output bytes
         * to be written out. The general contract of <code>flush</code> is
         * that calling it is an indication that, if any bytes previously
         * written have been buffered by the implementation of the output
         * stream, such bytes should immediately be written to their
         * intended destination.
         * <p>
         * If the intended destination of this stream is an abstraction provided by
         * the underlying operating system, for example a file, then flushing the
         * stream guarantees only that bytes previously written to the stream are
         * passed to the operating system for writing; it does not guarantee that
         * they are actually written to a physical device such as a disk drive.
         * <p>
         * The <code>flush</code> method of <code>OutputStream</code> does nothing.
         *
         * @exception  IOException  if an I/O error occurs.
         */
        flush() {
        }
        /**
         * Closes this output stream and releases any system resources
         * associated with this stream. The general contract of <code>close</code>
         * is that it closes the output stream. A closed stream cannot perform
         * output operations and cannot be reopened.
         * <p>
         * The <code>close</code> method of <code>OutputStream</code> does nothing.
         *
         * @exception  IOException  if an I/O error occurs.
         */
        close() {
        }
    }

    /**
     * Custom Error class of type Exception.
     */
    class OutOfMemoryError extends Exception {
    }

    /*
     * Copyright (c) 1994, 2010, Oracle and/or its affiliates. All rights reserved.
     * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
     *
     * This code is free software; you can redistribute it and/or modify it
     * under the terms of the GNU General Public License version 2 only, as
     * published by the Free Software Foundation.  Oracle designates this
     * particular file as subject to the "Classpath" exception as provided
     * by Oracle in the LICENSE file that accompanied this code.
     *
     * This code is distributed in the hope that it will be useful, but WITHOUT
     * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
     * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
     * version 2 for more details (a copy is included in the LICENSE file that
     * accompanied this code).
     *
     * You should have received a copy of the GNU General Public License version
     * 2 along with this work; if not, write to the Free Software Foundation,
     * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
     *
     * Please contact Oracle, 500 Oracle Parkway, Redwood Shores, CA 94065 USA
     * or visit www.oracle.com if you need additional information or have any
     * questions.
     */
    /**
     * This class implements an output stream in which the data is
     * written into a byte array. The buffer automatically grows as data
     * is written to it.
     * The data can be retrieved using <code>toByteArray()</code> and
     * <code>toString()</code>.
     * <p>
     * Closing a <tt>ByteArrayOutputStream</tt> has no effect. The methods in
     * this class can be called after the stream has been closed without
     * generating an <tt>IOException</tt>.
     *
     * @author  Arthur van Hoff
     * @since   JDK1.0
     */
    /*public*/ class ByteArrayOutputStream extends OutputStream {
        /**
         * Creates a new byte array output stream. The buffer capacity is
         * initially 32 bytes, though its size increases if necessary.
         */
        // public constructor() {
        //     this(32);
        // }
        /**
         * Creates a new byte array output stream, with a buffer capacity of
         * the specified size, in bytes.
         *
         * @param   size   the initial size.
         * @exception  IllegalArgumentException if size is negative.
         */
        constructor(size = 32) {
            super();
            /**
             * The number of valid bytes in the buffer.
             */
            this.count = 0;
            if (size < 0) {
                throw new IllegalArgumentException('Negative initial size: '
                    + size);
            }
            this.buf = new Uint8Array(size);
        }
        /**
         * Increases the capacity if necessary to ensure that it can hold
         * at least the number of elements specified by the minimum
         * capacity argument.
         *
         * @param minCapacity the desired minimum capacity
         * @throws OutOfMemoryError if {@code minCapacity < 0}.  This is
         * interpreted as a request for the unsatisfiably large capacity
         * {@code (long) Integer.MAX_VALUE + (minCapacity - Integer.MAX_VALUE)}.
         */
        ensureCapacity(minCapacity) {
            // overflow-conscious code
            if (minCapacity - this.buf.length > 0)
                this.grow(minCapacity);
        }
        /**
         * Increases the capacity to ensure that it can hold at least the
         * number of elements specified by the minimum capacity argument.
         *
         * @param minCapacity the desired minimum capacity
         */
        grow(minCapacity) {
            // overflow-conscious code
            let oldCapacity = this.buf.length;
            let newCapacity = oldCapacity << 1;
            if (newCapacity - minCapacity < 0)
                newCapacity = minCapacity;
            if (newCapacity < 0) {
                if (minCapacity < 0) // overflow
                    throw new OutOfMemoryError();
                newCapacity = Integer.MAX_VALUE;
            }
            this.buf = Arrays.copyOfUint8Array(this.buf, newCapacity);
        }
        /**
         * Writes the specified byte to this byte array output stream.
         *
         * @param   b   the byte to be written.
         */
        write(b) {
            this.ensureCapacity(this.count + 1);
            this.buf[this.count] = /*(byte)*/ b;
            this.count += 1;
        }
        /**
         * Writes <code>len</code> bytes from the specified byte array
         * starting at offset <code>off</code> to this byte array output stream.
         *
         * @param   b     the data.
         * @param   off   the start offset in the data.
         * @param   len   the number of bytes to write.
         */
        writeBytesOffset(b, off, len) {
            if ((off < 0) || (off > b.length) || (len < 0) ||
                ((off + len) - b.length > 0)) {
                throw new IndexOutOfBoundsException();
            }
            this.ensureCapacity(this.count + len);
            System.arraycopy(b, off, this.buf, this.count, len);
            this.count += len;
        }
        /**
         * Writes the complete contents of this byte array output stream to
         * the specified output stream argument, as if by calling the output
         * stream's write method using <code>out.write(buf, 0, count)</code>.
         *
         * @param      out   the output stream to which to write the data.
         * @exception  IOException  if an I/O error occurs.
         */
        writeTo(out) {
            out.writeBytesOffset(this.buf, 0, this.count);
        }
        /**
         * Resets the <code>count</code> field of this byte array output
         * stream to zero, so that all currently accumulated output in the
         * output stream is discarded. The output stream can be used again,
         * reusing the already allocated buffer space.
         *
         * @see     java.io.ByteArrayInputStream#count
         */
        reset() {
            this.count = 0;
        }
        /**
         * Creates a newly allocated byte array. Its size is the current
         * size of this output stream and the valid contents of the buffer
         * have been copied into it.
         *
         * @return  the current contents of this output stream, as a byte array.
         * @see     java.io.ByteArrayOutputStream#size()
         */
        toByteArray() {
            return Arrays.copyOfUint8Array(this.buf, this.count);
        }
        /**
         * Returns the current size of the buffer.
         *
         * @return  the value of the <code>count</code> field, which is the number
         *          of valid bytes in this output stream.
         * @see     java.io.ByteArrayOutputStream#count
         */
        size() {
            return this.count;
        }
        toString(param) {
            if (!param) {
                return this.toString_void();
            }
            if (typeof param === 'string') {
                return this.toString_string(param);
            }
            return this.toString_number(param);
        }
        /**
         * Converts the buffer's contents into a string decoding bytes using the
         * platform's default character set. The length of the new <tt>String</tt>
         * is a function of the character set, and hence may not be equal to the
         * size of the buffer.
         *
         * <p> This method always replaces malformed-input and unmappable-character
         * sequences with the default replacement string for the platform's
         * default character set. The {@linkplain java.nio.charset.CharsetDecoder}
         * class should be used when more control over the decoding process is
         * required.
         *
         * @return String decoded from the buffer's contents.
         * @since  JDK1.1
         */
        toString_void() {
            return new String(this.buf /*, 0, this.count*/).toString();
        }
        /**
         * Converts the buffer's contents into a string by decoding the bytes using
         * the specified {@link java.nio.charset.Charset charsetName}. The length of
         * the new <tt>String</tt> is a function of the charset, and hence may not be
         * equal to the length of the byte array.
         *
         * <p> This method always replaces malformed-input and unmappable-character
         * sequences with this charset's default replacement string. The {@link
         * java.nio.charset.CharsetDecoder} class should be used when more control
         * over the decoding process is required.
         *
         * @param  charsetName  the name of a supported
         *              {@linkplain java.nio.charset.Charset </code>charset<code>}
         * @return String decoded from the buffer's contents.
         * @exception  UnsupportedEncodingException
         *             If the named charset is not supported
         * @since   JDK1.1
         */
        toString_string(charsetName) {
            return new String(this.buf /*, 0, this.count, charsetName*/).toString();
        }
        /**
         * Creates a newly allocated string. Its size is the current size of
         * the output stream and the valid contents of the buffer have been
         * copied into it. Each character <i>c</i> in the resulting string is
         * constructed from the corresponding element <i>b</i> in the byte
         * array such that:
         * <blockquote><pre>
         *     c == (char)(((hibyte &amp; 0xff) &lt;&lt; 8) | (b &amp; 0xff))
         * </pre></blockquote>
         *
         * @deprecated This method does not properly convert bytes into characters.
         * As of JDK&nbsp;1.1, the preferred way to do this is via the
         * <code>toString(String enc)</code> method, which takes an encoding-name
         * argument, or the <code>toString()</code> method, which uses the
         * platform's default character encoding.
         *
         * @param      hibyte    the high byte of each resulting Unicode character.
         * @return     the current contents of the output stream, as a string.
         * @see        java.io.ByteArrayOutputStream#size()
         * @see        java.io.ByteArrayOutputStream#toString(String)
         * @see        java.io.ByteArrayOutputStream#toString()
         */
        // @Deprecated
        toString_number(hibyte) {
            return new String(this.buf /*, hibyte, 0, this.count*/).toString();
        }
        /**
         * Closing a <tt>ByteArrayOutputStream</tt> has no effect. The methods in
         * this class can be called after the stream has been closed without
         * generating an <tt>IOException</tt>.
         * <p>
         *
         * @throws IOException
         */
        close() {
        }
    }

    /*
     * Copyright 2009 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /*private*/ var Mode$2;
    (function (Mode) {
        Mode[Mode["ALPHA"] = 0] = "ALPHA";
        Mode[Mode["LOWER"] = 1] = "LOWER";
        Mode[Mode["MIXED"] = 2] = "MIXED";
        Mode[Mode["PUNCT"] = 3] = "PUNCT";
        Mode[Mode["ALPHA_SHIFT"] = 4] = "ALPHA_SHIFT";
        Mode[Mode["PUNCT_SHIFT"] = 5] = "PUNCT_SHIFT";
    })(Mode$2 || (Mode$2 = {}));
    /**
     * Indirectly access the global BigInt constructor, it
     * allows browsers that doesn't support BigInt to run
     * the library without breaking due to "undefined BigInt"
     * errors.
     */
    function getBigIntConstructor() {
        if (typeof window !== 'undefined') {
            return window['BigInt'] || null;
        }
        if (typeof global !== 'undefined') {
            return global['BigInt'] || null;
        }
        throw new Error('Can\'t search globals for BigInt!');
    }
    /**
     * Used to store the BigInt constructor.
     */
    let BigInteger;
    /**
     * This function creates a bigint value. It allows browsers
     * that doesn't support BigInt to run the rest of the library
     * by not directly accessing the BigInt constructor.
     */
    function createBigInt(num) {
        if (typeof BigInteger === 'undefined') {
            BigInteger = getBigIntConstructor();
        }
        if (BigInteger === null) {
            throw new Error('BigInt is not supported!');
        }
        return BigInteger(num);
    }
    function getEXP900() {
        // in Java - array with length = 16
        let EXP900 = [];
        EXP900[0] = createBigInt(1);
        let nineHundred = createBigInt(900);
        EXP900[1] = nineHundred;
        // in Java - array with length = 16
        for (let i /*int*/ = 2; i < 16; i++) {
            EXP900[i] = EXP900[i - 1] * nineHundred;
        }
        return EXP900;
    }
    /**
     * <p>This class contains the methods for decoding the PDF417 codewords.</p>
     *
     * @author SITA Lab (kevin.osullivan@sita.aero)
     * @author Guenther Grau
     */
    /*final*/ class DecodedBitStreamParser$1 {
        //   private DecodedBitStreamParser() {
        // }
        /**
         *
         * @param codewords
         * @param ecLevel
         *
         * @throws FormatException
         */
        static decode(codewords, ecLevel) {
            // pass encoding to result (will be used for decode symbols in byte mode)
            let result = new StringBuilder('');
            // let encoding: Charset = StandardCharsets.ISO_8859_1;
            let encoding = CharacterSetECI.ISO8859_1;
            /**
             * @note the next command is specific from this TypeScript library
             * because TS can't properly cast some values to char and
             * convert it to string later correctly due to encoding
             * differences from Java version. As reported here:
             * https://github.com/zxing-js/library/pull/264/files#r382831593
             */
            result.enableDecoding(encoding);
            // Get compaction mode
            let codeIndex = 1;
            let code = codewords[codeIndex++];
            let resultMetadata = new PDF417ResultMetadata();
            while (codeIndex < codewords[0]) {
                switch (code) {
                    case DecodedBitStreamParser$1.TEXT_COMPACTION_MODE_LATCH:
                        codeIndex = DecodedBitStreamParser$1.textCompaction(codewords, codeIndex, result);
                        break;
                    case DecodedBitStreamParser$1.BYTE_COMPACTION_MODE_LATCH:
                    case DecodedBitStreamParser$1.BYTE_COMPACTION_MODE_LATCH_6:
                        codeIndex = DecodedBitStreamParser$1.byteCompaction(code, codewords, encoding, codeIndex, result);
                        break;
                    case DecodedBitStreamParser$1.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                        result.append(/*(char)*/ codewords[codeIndex++]);
                        break;
                    case DecodedBitStreamParser$1.NUMERIC_COMPACTION_MODE_LATCH:
                        codeIndex = DecodedBitStreamParser$1.numericCompaction(codewords, codeIndex, result);
                        break;
                    case DecodedBitStreamParser$1.ECI_CHARSET:
                        let charsetECI = CharacterSetECI.getCharacterSetECIByValue(codewords[codeIndex++]);
                        // encoding = Charset.forName(charsetECI.getName());
                        break;
                    case DecodedBitStreamParser$1.ECI_GENERAL_PURPOSE:
                        // Can't do anything with generic ECI; skip its 2 characters
                        codeIndex += 2;
                        break;
                    case DecodedBitStreamParser$1.ECI_USER_DEFINED:
                        // Can't do anything with user ECI; skip its 1 character
                        codeIndex++;
                        break;
                    case DecodedBitStreamParser$1.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                        codeIndex = DecodedBitStreamParser$1.decodeMacroBlock(codewords, codeIndex, resultMetadata);
                        break;
                    case DecodedBitStreamParser$1.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                    case DecodedBitStreamParser$1.MACRO_PDF417_TERMINATOR:
                        // Should not see these outside a macro block
                        throw new FormatException();
                    default:
                        // Default to text compaction. During testing numerous barcodes
                        // appeared to be missing the starting mode. In these cases defaulting
                        // to text compaction seems to work.
                        codeIndex--;
                        codeIndex = DecodedBitStreamParser$1.textCompaction(codewords, codeIndex, result);
                        break;
                }
                if (codeIndex < codewords.length) {
                    code = codewords[codeIndex++];
                }
                else {
                    throw FormatException.getFormatInstance();
                }
            }
            if (result.length() === 0) {
                throw FormatException.getFormatInstance();
            }
            let decoderResult = new DecoderResult(null, result.toString(), null, ecLevel);
            decoderResult.setOther(resultMetadata);
            return decoderResult;
        }
        /**
         *
         * @param int
         * @param param1
         * @param codewords
         * @param int
         * @param codeIndex
         * @param PDF417ResultMetadata
         * @param resultMetadata
         *
         * @throws FormatException
         */
        // @SuppressWarnings("deprecation")
        static decodeMacroBlock(codewords, codeIndex, resultMetadata) {
            if (codeIndex + DecodedBitStreamParser$1.NUMBER_OF_SEQUENCE_CODEWORDS > codewords[0]) {
                // we must have at least two bytes left for the segment index
                throw FormatException.getFormatInstance();
            }
            let segmentIndexArray = new Int32Array(DecodedBitStreamParser$1.NUMBER_OF_SEQUENCE_CODEWORDS);
            for (let i /*int*/ = 0; i < DecodedBitStreamParser$1.NUMBER_OF_SEQUENCE_CODEWORDS; i++, codeIndex++) {
                segmentIndexArray[i] = codewords[codeIndex];
            }
            resultMetadata.setSegmentIndex(Integer.parseInt(DecodedBitStreamParser$1.decodeBase900toBase10(segmentIndexArray, DecodedBitStreamParser$1.NUMBER_OF_SEQUENCE_CODEWORDS)));
            let fileId = new StringBuilder();
            codeIndex = DecodedBitStreamParser$1.textCompaction(codewords, codeIndex, fileId);
            resultMetadata.setFileId(fileId.toString());
            let optionalFieldsStart = -1;
            if (codewords[codeIndex] === DecodedBitStreamParser$1.BEGIN_MACRO_PDF417_OPTIONAL_FIELD) {
                optionalFieldsStart = codeIndex + 1;
            }
            while (codeIndex < codewords[0]) {
                switch (codewords[codeIndex]) {
                    case DecodedBitStreamParser$1.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                        codeIndex++;
                        switch (codewords[codeIndex]) {
                            case DecodedBitStreamParser$1.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                                let fileName = new StringBuilder();
                                codeIndex = DecodedBitStreamParser$1.textCompaction(codewords, codeIndex + 1, fileName);
                                resultMetadata.setFileName(fileName.toString());
                                break;
                            case DecodedBitStreamParser$1.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                                let sender = new StringBuilder();
                                codeIndex = DecodedBitStreamParser$1.textCompaction(codewords, codeIndex + 1, sender);
                                resultMetadata.setSender(sender.toString());
                                break;
                            case DecodedBitStreamParser$1.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                                let addressee = new StringBuilder();
                                codeIndex = DecodedBitStreamParser$1.textCompaction(codewords, codeIndex + 1, addressee);
                                resultMetadata.setAddressee(addressee.toString());
                                break;
                            case DecodedBitStreamParser$1.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                                let segmentCount = new StringBuilder();
                                codeIndex = DecodedBitStreamParser$1.numericCompaction(codewords, codeIndex + 1, segmentCount);
                                resultMetadata.setSegmentCount(Integer.parseInt(segmentCount.toString()));
                                break;
                            case DecodedBitStreamParser$1.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                                let timestamp = new StringBuilder();
                                codeIndex = DecodedBitStreamParser$1.numericCompaction(codewords, codeIndex + 1, timestamp);
                                resultMetadata.setTimestamp(Long.parseLong(timestamp.toString()));
                                break;
                            case DecodedBitStreamParser$1.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                                let checksum = new StringBuilder();
                                codeIndex = DecodedBitStreamParser$1.numericCompaction(codewords, codeIndex + 1, checksum);
                                resultMetadata.setChecksum(Integer.parseInt(checksum.toString()));
                                break;
                            case DecodedBitStreamParser$1.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                                let fileSize = new StringBuilder();
                                codeIndex = DecodedBitStreamParser$1.numericCompaction(codewords, codeIndex + 1, fileSize);
                                resultMetadata.setFileSize(Long.parseLong(fileSize.toString()));
                                break;
                            default:
                                throw FormatException.getFormatInstance();
                        }
                        break;
                    case DecodedBitStreamParser$1.MACRO_PDF417_TERMINATOR:
                        codeIndex++;
                        resultMetadata.setLastSegment(true);
                        break;
                    default:
                        throw FormatException.getFormatInstance();
                }
            }
            // copy optional fields to additional options
            if (optionalFieldsStart !== -1) {
                let optionalFieldsLength = codeIndex - optionalFieldsStart;
                if (resultMetadata.isLastSegment()) {
                    // do not include terminator
                    optionalFieldsLength--;
                }
                resultMetadata.setOptionalData(Arrays.copyOfRange(codewords, optionalFieldsStart, optionalFieldsStart + optionalFieldsLength));
            }
            return codeIndex;
        }
        /**
         * Text Compaction mode (see 5.4.1.5) permits all printable ASCII characters to be
         * encoded, i.e. values 32 - 126 inclusive in accordance with ISO/IEC 646 (IRV), as
         * well as selected control characters.
         *
         * @param codewords The array of codewords (data + error)
         * @param codeIndex The current index into the codeword array.
         * @param result    The decoded data is appended to the result.
         * @return The next index into the codeword array.
         */
        static textCompaction(codewords, codeIndex, result) {
            // 2 character per codeword
            let textCompactionData = new Int32Array((codewords[0] - codeIndex) * 2);
            // Used to hold the byte compaction value if there is a mode shift
            let byteCompactionData = new Int32Array((codewords[0] - codeIndex) * 2);
            let index = 0;
            let end = false;
            while ((codeIndex < codewords[0]) && !end) {
                let code = codewords[codeIndex++];
                if (code < DecodedBitStreamParser$1.TEXT_COMPACTION_MODE_LATCH) {
                    textCompactionData[index] = code / 30;
                    textCompactionData[index + 1] = code % 30;
                    index += 2;
                }
                else {
                    switch (code) {
                        case DecodedBitStreamParser$1.TEXT_COMPACTION_MODE_LATCH:
                            // reinitialize text compaction mode to alpha sub mode
                            textCompactionData[index++] = DecodedBitStreamParser$1.TEXT_COMPACTION_MODE_LATCH;
                            break;
                        case DecodedBitStreamParser$1.BYTE_COMPACTION_MODE_LATCH:
                        case DecodedBitStreamParser$1.BYTE_COMPACTION_MODE_LATCH_6:
                        case DecodedBitStreamParser$1.NUMERIC_COMPACTION_MODE_LATCH:
                        case DecodedBitStreamParser$1.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                        case DecodedBitStreamParser$1.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                        case DecodedBitStreamParser$1.MACRO_PDF417_TERMINATOR:
                            codeIndex--;
                            end = true;
                            break;
                        case DecodedBitStreamParser$1.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                            // The Mode Shift codeword 913 shall cause a temporary
                            // switch from Text Compaction mode to Byte Compaction mode.
                            // This switch shall be in effect for only the next codeword,
                            // after which the mode shall revert to the prevailing sub-mode
                            // of the Text Compaction mode. Codeword 913 is only available
                            // in Text Compaction mode; its use is described in 5.4.2.4.
                            textCompactionData[index] = DecodedBitStreamParser$1.MODE_SHIFT_TO_BYTE_COMPACTION_MODE;
                            code = codewords[codeIndex++];
                            byteCompactionData[index] = code;
                            index++;
                            break;
                    }
                }
            }
            DecodedBitStreamParser$1.decodeTextCompaction(textCompactionData, byteCompactionData, index, result);
            return codeIndex;
        }
        /**
         * The Text Compaction mode includes all the printable ASCII characters
         * (i.e. values from 32 to 126) and three ASCII control characters: HT or tab
         * (9: e), LF or line feed (10: e), and CR or carriage
         * return (13: e). The Text Compaction mode also includes various latch
         * and shift characters which are used exclusively within the mode. The Text
         * Compaction mode encodes up to 2 characters per codeword. The compaction rules
         * for converting data into PDF417 codewords are defined in 5.4.2.2. The sub-mode
         * switches are defined in 5.4.2.3.
         *
         * @param textCompactionData The text compaction data.
         * @param byteCompactionData The byte compaction data if there
         *                           was a mode shift.
         * @param length             The size of the text compaction and byte compaction data.
         * @param result             The decoded data is appended to the result.
         */
        static decodeTextCompaction(textCompactionData, byteCompactionData, length, result) {
            // Beginning from an initial state of the Alpha sub-mode
            // The default compaction mode for PDF417 in effect at the start of each symbol shall always be Text
            // Compaction mode Alpha sub-mode (alphabetic: uppercase). A latch codeword from another mode to the Text
            // Compaction mode shall always switch to the Text Compaction Alpha sub-mode.
            let subMode = Mode$2.ALPHA;
            let priorToShiftMode = Mode$2.ALPHA;
            let i = 0;
            while (i < length) {
                let subModeCh = textCompactionData[i];
                let ch = /*char*/ '';
                switch (subMode) {
                    case Mode$2.ALPHA:
                        // Alpha (alphabetic: uppercase)
                        if (subModeCh < 26) {
                            // Upper case Alpha Character
                            // Note: 65 = 'A' ASCII -> there is byte code of symbol
                            ch = /*(char)('A' + subModeCh) */ String.fromCharCode(65 + subModeCh);
                        }
                        else {
                            switch (subModeCh) {
                                case 26:
                                    ch = ' ';
                                    break;
                                case DecodedBitStreamParser$1.LL:
                                    subMode = Mode$2.LOWER;
                                    break;
                                case DecodedBitStreamParser$1.ML:
                                    subMode = Mode$2.MIXED;
                                    break;
                                case DecodedBitStreamParser$1.PS:
                                    // Shift to punctuation
                                    priorToShiftMode = subMode;
                                    subMode = Mode$2.PUNCT_SHIFT;
                                    break;
                                case DecodedBitStreamParser$1.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                    result.append(/*(char)*/ byteCompactionData[i]);
                                    break;
                                case DecodedBitStreamParser$1.TEXT_COMPACTION_MODE_LATCH:
                                    subMode = Mode$2.ALPHA;
                                    break;
                            }
                        }
                        break;
                    case Mode$2.LOWER:
                        // Lower (alphabetic: lowercase)
                        if (subModeCh < 26) {
                            ch = /*(char)('a' + subModeCh)*/ String.fromCharCode(97 + subModeCh);
                        }
                        else {
                            switch (subModeCh) {
                                case 26:
                                    ch = ' ';
                                    break;
                                case DecodedBitStreamParser$1.AS:
                                    // Shift to alpha
                                    priorToShiftMode = subMode;
                                    subMode = Mode$2.ALPHA_SHIFT;
                                    break;
                                case DecodedBitStreamParser$1.ML:
                                    subMode = Mode$2.MIXED;
                                    break;
                                case DecodedBitStreamParser$1.PS:
                                    // Shift to punctuation
                                    priorToShiftMode = subMode;
                                    subMode = Mode$2.PUNCT_SHIFT;
                                    break;
                                case DecodedBitStreamParser$1.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                    // TODO Does this need to use the current character encoding? See other occurrences below
                                    result.append(/*(char)*/ byteCompactionData[i]);
                                    break;
                                case DecodedBitStreamParser$1.TEXT_COMPACTION_MODE_LATCH:
                                    subMode = Mode$2.ALPHA;
                                    break;
                            }
                        }
                        break;
                    case Mode$2.MIXED:
                        // Mixed (punctuation: e)
                        if (subModeCh < DecodedBitStreamParser$1.PL) {
                            ch = DecodedBitStreamParser$1.MIXED_CHARS[subModeCh];
                        }
                        else {
                            switch (subModeCh) {
                                case DecodedBitStreamParser$1.PL:
                                    subMode = Mode$2.PUNCT;
                                    break;
                                case 26:
                                    ch = ' ';
                                    break;
                                case DecodedBitStreamParser$1.LL:
                                    subMode = Mode$2.LOWER;
                                    break;
                                case DecodedBitStreamParser$1.AL:
                                    subMode = Mode$2.ALPHA;
                                    break;
                                case DecodedBitStreamParser$1.PS:
                                    // Shift to punctuation
                                    priorToShiftMode = subMode;
                                    subMode = Mode$2.PUNCT_SHIFT;
                                    break;
                                case DecodedBitStreamParser$1.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                    result.append(/*(char)*/ byteCompactionData[i]);
                                    break;
                                case DecodedBitStreamParser$1.TEXT_COMPACTION_MODE_LATCH:
                                    subMode = Mode$2.ALPHA;
                                    break;
                            }
                        }
                        break;
                    case Mode$2.PUNCT:
                        // Punctuation
                        if (subModeCh < DecodedBitStreamParser$1.PAL) {
                            ch = DecodedBitStreamParser$1.PUNCT_CHARS[subModeCh];
                        }
                        else {
                            switch (subModeCh) {
                                case DecodedBitStreamParser$1.PAL:
                                    subMode = Mode$2.ALPHA;
                                    break;
                                case DecodedBitStreamParser$1.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                    result.append(/*(char)*/ byteCompactionData[i]);
                                    break;
                                case DecodedBitStreamParser$1.TEXT_COMPACTION_MODE_LATCH:
                                    subMode = Mode$2.ALPHA;
                                    break;
                            }
                        }
                        break;
                    case Mode$2.ALPHA_SHIFT:
                        // Restore sub-mode
                        subMode = priorToShiftMode;
                        if (subModeCh < 26) {
                            ch = /*(char)('A' + subModeCh)*/ String.fromCharCode(65 + subModeCh);
                        }
                        else {
                            switch (subModeCh) {
                                case 26:
                                    ch = ' ';
                                    break;
                                case DecodedBitStreamParser$1.TEXT_COMPACTION_MODE_LATCH:
                                    subMode = Mode$2.ALPHA;
                                    break;
                            }
                        }
                        break;
                    case Mode$2.PUNCT_SHIFT:
                        // Restore sub-mode
                        subMode = priorToShiftMode;
                        if (subModeCh < DecodedBitStreamParser$1.PAL) {
                            ch = DecodedBitStreamParser$1.PUNCT_CHARS[subModeCh];
                        }
                        else {
                            switch (subModeCh) {
                                case DecodedBitStreamParser$1.PAL:
                                    subMode = Mode$2.ALPHA;
                                    break;
                                case DecodedBitStreamParser$1.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                                    // PS before Shift-to-Byte is used as a padding character,
                                    // see 5.4.2.4 of the specification
                                    result.append(/*(char)*/ byteCompactionData[i]);
                                    break;
                                case DecodedBitStreamParser$1.TEXT_COMPACTION_MODE_LATCH:
                                    subMode = Mode$2.ALPHA;
                                    break;
                            }
                        }
                        break;
                }
                // if (ch !== 0) {
                if (ch !== '') {
                    // Append decoded character to result
                    result.append(ch);
                }
                i++;
            }
        }
        /**
         * Byte Compaction mode (see 5.4.3) permits all 256 possible 8-bit byte values to be encoded.
         * This includes all ASCII characters value 0 to 127 inclusive and provides for international
         * character set support.
         *
         * @param mode      The byte compaction mode i.e. 901 or 924
         * @param codewords The array of codewords (data + error)
         * @param encoding  Currently active character encoding
         * @param codeIndex The current index into the codeword array.
         * @param result    The decoded data is appended to the result.
         * @return The next index into the codeword array.
         */
        static /*int*/ byteCompaction(mode, codewords, encoding, codeIndex, result) {
            let decodedBytes = new ByteArrayOutputStream();
            let count = 0;
            let value = /*long*/ 0;
            let end = false;
            switch (mode) {
                case DecodedBitStreamParser$1.BYTE_COMPACTION_MODE_LATCH:
                    // Total number of Byte Compaction characters to be encoded
                    // is not a multiple of 6
                    let byteCompactedCodewords = new Int32Array(6);
                    let nextCode = codewords[codeIndex++];
                    while ((codeIndex < codewords[0]) && !end) {
                        byteCompactedCodewords[count++] = nextCode;
                        // Base 900
                        value = 900 * value + nextCode;
                        nextCode = codewords[codeIndex++];
                        // perhaps it should be ok to check only nextCode >= TEXT_COMPACTION_MODE_LATCH
                        switch (nextCode) {
                            case DecodedBitStreamParser$1.TEXT_COMPACTION_MODE_LATCH:
                            case DecodedBitStreamParser$1.BYTE_COMPACTION_MODE_LATCH:
                            case DecodedBitStreamParser$1.NUMERIC_COMPACTION_MODE_LATCH:
                            case DecodedBitStreamParser$1.BYTE_COMPACTION_MODE_LATCH_6:
                            case DecodedBitStreamParser$1.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                            case DecodedBitStreamParser$1.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                            case DecodedBitStreamParser$1.MACRO_PDF417_TERMINATOR:
                                codeIndex--;
                                end = true;
                                break;
                            default:
                                if ((count % 5 === 0) && (count > 0)) {
                                    // Decode every 5 codewords
                                    // Convert to Base 256
                                    for (let j /*int*/ = 0; j < 6; ++j) {
                                        /* @note
                                         * JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.
                                         * So the next bitwise operation could not be done with simple numbers
                                         */
                                        decodedBytes.write(/*(byte)*/ Number(createBigInt(value) >> createBigInt(8 * (5 - j))));
                                    }
                                    value = 0;
                                    count = 0;
                                }
                                break;
                        }
                    }
                    // if the end of all codewords is reached the last codeword needs to be added
                    if (codeIndex === codewords[0] && nextCode < DecodedBitStreamParser$1.TEXT_COMPACTION_MODE_LATCH) {
                        byteCompactedCodewords[count++] = nextCode;
                    }
                    // If Byte Compaction mode is invoked with codeword 901,
                    // the last group of codewords is interpreted directly
                    // as one byte per codeword, without compaction.
                    for (let i /*int*/ = 0; i < count; i++) {
                        decodedBytes.write(/*(byte)*/ byteCompactedCodewords[i]);
                    }
                    break;
                case DecodedBitStreamParser$1.BYTE_COMPACTION_MODE_LATCH_6:
                    // Total number of Byte Compaction characters to be encoded
                    // is an integer multiple of 6
                    while (codeIndex < codewords[0] && !end) {
                        let code = codewords[codeIndex++];
                        if (code < DecodedBitStreamParser$1.TEXT_COMPACTION_MODE_LATCH) {
                            count++;
                            // Base 900
                            value = 900 * value + code;
                        }
                        else {
                            switch (code) {
                                case DecodedBitStreamParser$1.TEXT_COMPACTION_MODE_LATCH:
                                case DecodedBitStreamParser$1.BYTE_COMPACTION_MODE_LATCH:
                                case DecodedBitStreamParser$1.NUMERIC_COMPACTION_MODE_LATCH:
                                case DecodedBitStreamParser$1.BYTE_COMPACTION_MODE_LATCH_6:
                                case DecodedBitStreamParser$1.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                                case DecodedBitStreamParser$1.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                                case DecodedBitStreamParser$1.MACRO_PDF417_TERMINATOR:
                                    codeIndex--;
                                    end = true;
                                    break;
                            }
                        }
                        if ((count % 5 === 0) && (count > 0)) {
                            // Decode every 5 codewords
                            // Convert to Base 256
                            /* @note
                             * JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.
                             * So the next bitwise operation could not be done with simple numbers
                            */
                            for (let j /*int*/ = 0; j < 6; ++j) {
                                decodedBytes.write(/*(byte)*/ Number(createBigInt(value) >> createBigInt(8 * (5 - j))));
                            }
                            value = 0;
                            count = 0;
                        }
                    }
                    break;
            }
            result.append(StringEncoding.decode(decodedBytes.toByteArray(), encoding));
            return codeIndex;
        }
        /**
         * Numeric Compaction mode (see 5.4.4) permits efficient encoding of numeric data strings.
         *
         * @param codewords The array of codewords (data + error)
         * @param codeIndex The current index into the codeword array.
         * @param result    The decoded data is appended to the result.
         * @return The next index into the codeword array.
         *
         * @throws FormatException
         */
        static numericCompaction(codewords, codeIndex /*int*/, result) {
            let count = 0;
            let end = false;
            let numericCodewords = new Int32Array(DecodedBitStreamParser$1.MAX_NUMERIC_CODEWORDS);
            while (codeIndex < codewords[0] && !end) {
                let code = codewords[codeIndex++];
                if (codeIndex === codewords[0]) {
                    end = true;
                }
                if (code < DecodedBitStreamParser$1.TEXT_COMPACTION_MODE_LATCH) {
                    numericCodewords[count] = code;
                    count++;
                }
                else {
                    switch (code) {
                        case DecodedBitStreamParser$1.TEXT_COMPACTION_MODE_LATCH:
                        case DecodedBitStreamParser$1.BYTE_COMPACTION_MODE_LATCH:
                        case DecodedBitStreamParser$1.BYTE_COMPACTION_MODE_LATCH_6:
                        case DecodedBitStreamParser$1.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                        case DecodedBitStreamParser$1.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                        case DecodedBitStreamParser$1.MACRO_PDF417_TERMINATOR:
                            codeIndex--;
                            end = true;
                            break;
                    }
                }
                if ((count % DecodedBitStreamParser$1.MAX_NUMERIC_CODEWORDS === 0 || code === DecodedBitStreamParser$1.NUMERIC_COMPACTION_MODE_LATCH || end) && count > 0) {
                    // Re-invoking Numeric Compaction mode (by using codeword 902
                    // while in Numeric Compaction mode) serves  to terminate the
                    // current Numeric Compaction mode grouping as described in 5.4.4.2,
                    // and then to start a new one grouping.
                    result.append(DecodedBitStreamParser$1.decodeBase900toBase10(numericCodewords, count));
                    count = 0;
                }
            }
            return codeIndex;
        }
        /**
         * Convert a list of Numeric Compacted codewords from Base 900 to Base 10.
         *
         * @param codewords The array of codewords
         * @param count     The number of codewords
         * @return The decoded string representing the Numeric data.
         *
         * EXAMPLE
         * Encode the fifteen digit numeric string 000213298174000
         * Prefix the numeric string with a 1 and set the initial value of
         * t = 1 000 213 298 174 000
         * Calculate codeword 0
         * d0 = 1 000 213 298 174 000 mod 900 = 200
         *
         * t = 1 000 213 298 174 000 div 900 = 1 111 348 109 082
         * Calculate codeword 1
         * d1 = 1 111 348 109 082 mod 900 = 282
         *
         * t = 1 111 348 109 082 div 900 = 1 234 831 232
         * Calculate codeword 2
         * d2 = 1 234 831 232 mod 900 = 632
         *
         * t = 1 234 831 232 div 900 = 1 372 034
         * Calculate codeword 3
         * d3 = 1 372 034 mod 900 = 434
         *
         * t = 1 372 034 div 900 = 1 524
         * Calculate codeword 4
         * d4 = 1 524 mod 900 = 624
         *
         * t = 1 524 div 900 = 1
         * Calculate codeword 5
         * d5 = 1 mod 900 = 1
         * t = 1 div 900 = 0
         * Codeword sequence is: 1, 624, 434, 632, 282, 200
         *
         * Decode the above codewords involves
         *   1 x 900 power of 5 + 624 x 900 power of 4 + 434 x 900 power of 3 +
         * 632 x 900 power of 2 + 282 x 900 power of 1 + 200 x 900 power of 0 = 1000213298174000
         *
         * Remove leading 1 =>  Result is 000213298174000
         *
         * @throws FormatException
         */
        static decodeBase900toBase10(codewords, count) {
            let result = createBigInt(0);
            for (let i /*int*/ = 0; i < count; i++) {
                result += DecodedBitStreamParser$1.EXP900[count - i - 1] * createBigInt(codewords[i]);
            }
            let resultString = result.toString();
            if (resultString.charAt(0) !== '1') {
                throw new FormatException();
            }
            return resultString.substring(1);
        }
    }
    DecodedBitStreamParser$1.TEXT_COMPACTION_MODE_LATCH = 900;
    DecodedBitStreamParser$1.BYTE_COMPACTION_MODE_LATCH = 901;
    DecodedBitStreamParser$1.NUMERIC_COMPACTION_MODE_LATCH = 902;
    DecodedBitStreamParser$1.BYTE_COMPACTION_MODE_LATCH_6 = 924;
    DecodedBitStreamParser$1.ECI_USER_DEFINED = 925;
    DecodedBitStreamParser$1.ECI_GENERAL_PURPOSE = 926;
    DecodedBitStreamParser$1.ECI_CHARSET = 927;
    DecodedBitStreamParser$1.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928;
    DecodedBitStreamParser$1.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923;
    DecodedBitStreamParser$1.MACRO_PDF417_TERMINATOR = 922;
    DecodedBitStreamParser$1.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913;
    DecodedBitStreamParser$1.MAX_NUMERIC_CODEWORDS = 15;
    DecodedBitStreamParser$1.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0;
    DecodedBitStreamParser$1.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1;
    DecodedBitStreamParser$1.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2;
    DecodedBitStreamParser$1.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3;
    DecodedBitStreamParser$1.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4;
    DecodedBitStreamParser$1.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5;
    DecodedBitStreamParser$1.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6;
    DecodedBitStreamParser$1.PL = 25;
    DecodedBitStreamParser$1.LL = 27;
    DecodedBitStreamParser$1.AS = 27;
    DecodedBitStreamParser$1.ML = 28;
    DecodedBitStreamParser$1.AL = 28;
    DecodedBitStreamParser$1.PS = 29;
    DecodedBitStreamParser$1.PAL = 29;
    DecodedBitStreamParser$1.PUNCT_CHARS = ';<>@[\\]_`~!\r\t,:\n-.$/"|*()?{}\'';
    DecodedBitStreamParser$1.MIXED_CHARS = '0123456789&\r\t,:#-.$/+%*=^';
    /**
     * Table containing values for the exponent of 900.
     * This is used in the numeric compaction decode algorithm.
     */
    DecodedBitStreamParser$1.EXP900 = getBigIntConstructor() ? getEXP900() : [];
    DecodedBitStreamParser$1.NUMBER_OF_SEQUENCE_CODEWORDS = 2;

    /*
     * Copyright 2009 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /*namespace com.google.zxing {*/
    /**
     * These are a set of hints that you may pass to Writers to specify their behavior.
     *
     * @author dswitkin@google.com (Daniel Switkin)
     */
    var EncodeHintType;
    (function (EncodeHintType) {
        /**
         * Specifies what degree of error correction to use, for example in QR Codes.
         * Type depends on the encoder. For example for QR codes it's type
         * {@link com.google.zxing.qrcode.decoder.ErrorCorrectionLevel ErrorCorrectionLevel}.
         * For Aztec it is of type {@link Integer}, representing the minimal percentage of error correction words.
         * For PDF417 it is of type {@link Integer}, valid values being 0 to 8.
         * In all cases, it can also be a {@link String} representation of the desired value as well.
         * Note: an Aztec symbol should have a minimum of 25% EC words.
         */
        EncodeHintType[EncodeHintType["ERROR_CORRECTION"] = 0] = "ERROR_CORRECTION";
        /**
         * Specifies what character encoding to use where applicable (type {@link String})
         */
        EncodeHintType[EncodeHintType["CHARACTER_SET"] = 1] = "CHARACTER_SET";
        /**
         * Specifies the matrix shape for Data Matrix (type {@link com.google.zxing.datamatrix.encoder.SymbolShapeHint})
         */
        EncodeHintType[EncodeHintType["DATA_MATRIX_SHAPE"] = 2] = "DATA_MATRIX_SHAPE";
        /**
         * Specifies a minimum barcode size (type {@link Dimension}). Only applicable to Data Matrix now.
         *
         * @deprecated use width/height params in
         * {@link com.google.zxing.datamatrix.DataMatrixWriter#encode(String, BarcodeFormat, int, int)}
         */
        /*@Deprecated*/
        EncodeHintType[EncodeHintType["MIN_SIZE"] = 3] = "MIN_SIZE";
        /**
         * Specifies a maximum barcode size (type {@link Dimension}). Only applicable to Data Matrix now.
         *
         * @deprecated without replacement
         */
        /*@Deprecated*/
        EncodeHintType[EncodeHintType["MAX_SIZE"] = 4] = "MAX_SIZE";
        /**
         * Specifies margin, in pixels, to use when generating the barcode. The meaning can vary
         * by format; for example it controls margin before and after the barcode horizontally for
         * most 1D formats. (Type {@link Integer}, or {@link String} representation of the integer value).
         */
        EncodeHintType[EncodeHintType["MARGIN"] = 5] = "MARGIN";
        /**
         * Specifies whether to use compact mode for PDF417 (type {@link Boolean}, or "true" or "false"
         * {@link String} value).
         */
        EncodeHintType[EncodeHintType["PDF417_COMPACT"] = 6] = "PDF417_COMPACT";
        /**
         * Specifies what compaction mode to use for PDF417 (type
         * {@link com.google.zxing.pdf417.encoder.Compaction Compaction} or {@link String} value of one of its
         * enum values).
         */
        EncodeHintType[EncodeHintType["PDF417_COMPACTION"] = 7] = "PDF417_COMPACTION";
        /**
         * Specifies the minimum and maximum number of rows and columns for PDF417 (type
         * {@link com.google.zxing.pdf417.encoder.Dimensions Dimensions}).
         */
        EncodeHintType[EncodeHintType["PDF417_DIMENSIONS"] = 8] = "PDF417_DIMENSIONS";
        /**
         * Specifies the required number of layers for an Aztec code.
         * A negative number (-1, -2, -3, -4) specifies a compact Aztec code.
         * 0 indicates to use the minimum number of layers (the default).
         * A positive number (1, 2, .. 32) specifies a normal (non-compact) Aztec code.
         * (Type {@link Integer}, or {@link String} representation of the integer value).
         */
        EncodeHintType[EncodeHintType["AZTEC_LAYERS"] = 9] = "AZTEC_LAYERS";
        /**
         * Specifies the exact version of QR code to be encoded.
         * (Type {@link Integer}, or {@link String} representation of the integer value).
         */
        EncodeHintType[EncodeHintType["QR_VERSION"] = 10] = "QR_VERSION";
    })(EncodeHintType || (EncodeHintType = {}));
    var EncodeHintType$1 = EncodeHintType;

    /*
     * Copyright 2008 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * <p>Implements Reed-Solomon encoding, as the name implies.</p>
     *
     * @author Sean Owen
     * @author William Rucklidge
     */
    class ReedSolomonEncoder {
        /**
         * A reed solomon error-correcting encoding constructor is created by
         * passing as Galois Field with of size equal to the number of code
         * words (symbols) in the alphabet (the number of values in each
         * element of arrays that are encoded/decoded).
         * @param field A galois field with a number of elements equal to the size
         * of the alphabet of symbols to encode.
         */
        constructor(field) {
            this.field = field;
            this.cachedGenerators = [];
            this.cachedGenerators.push(new GenericGFPoly(field, Int32Array.from([1])));
        }
        buildGenerator(degree /*int*/) {
            const cachedGenerators = this.cachedGenerators;
            if (degree >= cachedGenerators.length) {
                let lastGenerator = cachedGenerators[cachedGenerators.length - 1];
                const field = this.field;
                for (let d = cachedGenerators.length; d <= degree; d++) {
                    const nextGenerator = lastGenerator.multiply(new GenericGFPoly(field, Int32Array.from([1, field.exp(d - 1 + field.getGeneratorBase())])));
                    cachedGenerators.push(nextGenerator);
                    lastGenerator = nextGenerator;
                }
            }
            return cachedGenerators[degree];
        }
        /**
         * <p>Encode a sequence of code words (symbols) using Reed-Solomon to allow decoders
         * to detect and correct errors that may have been introduced when the resulting
         * data is stored or transmitted.</p>
         *
         * @param toEncode array used for both and output. Caller initializes the array with
         * the code words (symbols) to be encoded followed by empty elements allocated to make
         * space for error-correction code words in the encoded output. The array contains
         * the encdoded output when encode returns. Code words are encoded as numbers from
         * 0 to n-1, where n is the number of possible code words (symbols), as determined
         * by the size of the Galois Field passed in the constructor of this object.
         * @param ecBytes the number of elements reserved in the array (first parameter)
         * to store error-correction code words. Thus, the number of code words (symbols)
         * to encode in the first parameter is thus toEncode.length - ecBytes.
         * Note, the use of "bytes" in the name of this parameter is misleading, as there may
         * be more or fewer than 256 symbols being encoded, as determined by the number of
         * elements in the Galois Field passed as a constructor to this object.
         * @throws IllegalArgumentException thrown in response to validation errros.
         */
        encode(toEncode, ecBytes /*int*/) {
            if (ecBytes === 0) {
                throw new IllegalArgumentException('No error correction bytes');
            }
            const dataBytes = toEncode.length - ecBytes;
            if (dataBytes <= 0) {
                throw new IllegalArgumentException('No data bytes provided');
            }
            const generator = this.buildGenerator(ecBytes);
            const infoCoefficients = new Int32Array(dataBytes);
            System.arraycopy(toEncode, 0, infoCoefficients, 0, dataBytes);
            let info = new GenericGFPoly(this.field, infoCoefficients);
            info = info.multiplyByMonomial(ecBytes, 1);
            const remainder = info.divide(generator)[1];
            const coefficients = remainder.getCoefficients();
            const numZeroCoefficients = ecBytes - coefficients.length;
            for (let i = 0; i < numZeroCoefficients; i++) {
                toEncode[dataBytes + i] = 0;
            }
            System.arraycopy(coefficients, 0, toEncode, dataBytes + numZeroCoefficients, coefficients.length);
        }
    }

    /*
     * Copyright 2008 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @author Satoru Takabayashi
     * @author Daniel Switkin
     * @author Sean Owen
     */
    class MaskUtil {
        constructor() {
            // do nothing
        }
        /**
         * Apply mask penalty rule 1 and return the penalty. Find repetitive cells with the same color and
         * give penalty to them. Example: 00000 or 11111.
         */
        static applyMaskPenaltyRule1(matrix) {
            return MaskUtil.applyMaskPenaltyRule1Internal(matrix, true) + MaskUtil.applyMaskPenaltyRule1Internal(matrix, false);
        }
        /**
         * Apply mask penalty rule 2 and return the penalty. Find 2x2 blocks with the same color and give
         * penalty to them. This is actually equivalent to the spec's rule, which is to find MxN blocks and give a
         * penalty proportional to (M-1)x(N-1), because this is the number of 2x2 blocks inside such a block.
         */
        static applyMaskPenaltyRule2(matrix) {
            let penalty = 0;
            const array = matrix.getArray();
            const width = matrix.getWidth();
            const height = matrix.getHeight();
            for (let y = 0; y < height - 1; y++) {
                const arrayY = array[y];
                for (let x = 0; x < width - 1; x++) {
                    const value = arrayY[x];
                    if (value === arrayY[x + 1] && value === array[y + 1][x] && value === array[y + 1][x + 1]) {
                        penalty++;
                    }
                }
            }
            return MaskUtil.N2 * penalty;
        }
        /**
         * Apply mask penalty rule 3 and return the penalty. Find consecutive runs of 1:1:3:1:1:4
         * starting with black, or 4:1:1:3:1:1 starting with white, and give penalty to them.  If we
         * find patterns like 000010111010000, we give penalty once.
         */
        static applyMaskPenaltyRule3(matrix) {
            let numPenalties = 0;
            const array = matrix.getArray();
            const width = matrix.getWidth();
            const height = matrix.getHeight();
            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    const arrayY = array[y]; // We can at least optimize this access
                    if (x + 6 < width &&
                        arrayY[x] === 1 &&
                        arrayY[x + 1] === 0 &&
                        arrayY[x + 2] === 1 &&
                        arrayY[x + 3] === 1 &&
                        arrayY[x + 4] === 1 &&
                        arrayY[x + 5] === 0 &&
                        arrayY[x + 6] === 1 &&
                        (MaskUtil.isWhiteHorizontal(arrayY, x - 4, x) || MaskUtil.isWhiteHorizontal(arrayY, x + 7, x + 11))) {
                        numPenalties++;
                    }
                    if (y + 6 < height &&
                        array[y][x] === 1 &&
                        array[y + 1][x] === 0 &&
                        array[y + 2][x] === 1 &&
                        array[y + 3][x] === 1 &&
                        array[y + 4][x] === 1 &&
                        array[y + 5][x] === 0 &&
                        array[y + 6][x] === 1 &&
                        (MaskUtil.isWhiteVertical(array, x, y - 4, y) || MaskUtil.isWhiteVertical(array, x, y + 7, y + 11))) {
                        numPenalties++;
                    }
                }
            }
            return numPenalties * MaskUtil.N3;
        }
        static isWhiteHorizontal(rowArray, from /*int*/, to /*int*/) {
            from = Math.max(from, 0);
            to = Math.min(to, rowArray.length);
            for (let i = from; i < to; i++) {
                if (rowArray[i] === 1) {
                    return false;
                }
            }
            return true;
        }
        static isWhiteVertical(array, col /*int*/, from /*int*/, to /*int*/) {
            from = Math.max(from, 0);
            to = Math.min(to, array.length);
            for (let i = from; i < to; i++) {
                if (array[i][col] === 1) {
                    return false;
                }
            }
            return true;
        }
        /**
         * Apply mask penalty rule 4 and return the penalty. Calculate the ratio of dark cells and give
         * penalty if the ratio is far from 50%. It gives 10 penalty for 5% distance.
         */
        static applyMaskPenaltyRule4(matrix) {
            let numDarkCells = 0;
            const array = matrix.getArray();
            const width = matrix.getWidth();
            const height = matrix.getHeight();
            for (let y = 0; y < height; y++) {
                const arrayY = array[y];
                for (let x = 0; x < width; x++) {
                    if (arrayY[x] === 1) {
                        numDarkCells++;
                    }
                }
            }
            const numTotalCells = matrix.getHeight() * matrix.getWidth();
            const fivePercentVariances = Math.floor(Math.abs(numDarkCells * 2 - numTotalCells) * 10 / numTotalCells);
            return fivePercentVariances * MaskUtil.N4;
        }
        /**
         * Return the mask bit for "getMaskPattern" at "x" and "y". See 8.8 of JISX0510:2004 for mask
         * pattern conditions.
         */
        static getDataMaskBit(maskPattern /*int*/, x /*int*/, y /*int*/) {
            let intermediate; /*int*/
            let temp; /*int*/
            switch (maskPattern) {
                case 0:
                    intermediate = (y + x) & 0x1;
                    break;
                case 1:
                    intermediate = y & 0x1;
                    break;
                case 2:
                    intermediate = x % 3;
                    break;
                case 3:
                    intermediate = (y + x) % 3;
                    break;
                case 4:
                    intermediate = (Math.floor(y / 2) + Math.floor(x / 3)) & 0x1;
                    break;
                case 5:
                    temp = y * x;
                    intermediate = (temp & 0x1) + (temp % 3);
                    break;
                case 6:
                    temp = y * x;
                    intermediate = ((temp & 0x1) + (temp % 3)) & 0x1;
                    break;
                case 7:
                    temp = y * x;
                    intermediate = ((temp % 3) + ((y + x) & 0x1)) & 0x1;
                    break;
                default:
                    throw new IllegalArgumentException('Invalid mask pattern: ' + maskPattern);
            }
            return intermediate === 0;
        }
        /**
         * Helper function for applyMaskPenaltyRule1. We need this for doing this calculation in both
         * vertical and horizontal orders respectively.
         */
        static applyMaskPenaltyRule1Internal(matrix, isHorizontal) {
            let penalty = 0;
            const iLimit = isHorizontal ? matrix.getHeight() : matrix.getWidth();
            const jLimit = isHorizontal ? matrix.getWidth() : matrix.getHeight();
            const array = matrix.getArray();
            for (let i = 0; i < iLimit; i++) {
                let numSameBitCells = 0;
                let prevBit = -1;
                for (let j = 0; j < jLimit; j++) {
                    const bit = isHorizontal ? array[i][j] : array[j][i];
                    if (bit === prevBit) {
                        numSameBitCells++;
                    }
                    else {
                        if (numSameBitCells >= 5) {
                            penalty += MaskUtil.N1 + (numSameBitCells - 5);
                        }
                        numSameBitCells = 1; // Include the cell itself.
                        prevBit = bit;
                    }
                }
                if (numSameBitCells >= 5) {
                    penalty += MaskUtil.N1 + (numSameBitCells - 5);
                }
            }
            return penalty;
        }
    }
    // Penalty weights from section 6.8.2.1
    MaskUtil.N1 = 3;
    MaskUtil.N2 = 3;
    MaskUtil.N3 = 40;
    MaskUtil.N4 = 10;

    /*
     * Copyright 2008 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * JAVAPORT: The original code was a 2D array of ints, but since it only ever gets assigned
     * -1, 0, and 1, I'm going to use less memory and go with bytes.
     *
     * @author dswitkin@google.com (Daniel Switkin)
     */
    class ByteMatrix {
        constructor(width /*int*/, height /*int*/) {
            this.width = width;
            this.height = height;
            const bytes = new Array(height); // [height][width]
            for (let i = 0; i !== height; i++) {
                bytes[i] = new Uint8Array(width);
            }
            this.bytes = bytes;
        }
        getHeight() {
            return this.height;
        }
        getWidth() {
            return this.width;
        }
        get(x /*int*/, y /*int*/) {
            return this.bytes[y][x];
        }
        /**
         * @return an internal representation as bytes, in row-major order. array[y][x] represents point (x,y)
         */
        getArray() {
            return this.bytes;
        }
        // TYPESCRIPTPORT: preffer to let two methods instead of override to avoid type comparison inside
        setNumber(x /*int*/, y /*int*/, value /*byte|int*/) {
            this.bytes[y][x] = value;
        }
        // public set(x: number /*int*/, y: number /*int*/, value: number /*int*/): void {
        //   bytes[y][x] = (byte) value
        // }
        setBoolean(x /*int*/, y /*int*/, value) {
            this.bytes[y][x] = /*(byte) */ (value ? 1 : 0);
        }
        clear(value /*byte*/) {
            for (const aByte of this.bytes) {
                Arrays.fill(aByte, value);
            }
        }
        equals(o) {
            if (!(o instanceof ByteMatrix)) {
                return false;
            }
            const other = o;
            if (this.width !== other.width) {
                return false;
            }
            if (this.height !== other.height) {
                return false;
            }
            for (let y = 0, height = this.height; y < height; ++y) {
                const bytesY = this.bytes[y];
                const otherBytesY = other.bytes[y];
                for (let x = 0, width = this.width; x < width; ++x) {
                    if (bytesY[x] !== otherBytesY[x]) {
                        return false;
                    }
                }
            }
            return true;
        }
        /*@Override*/
        toString() {
            const result = new StringBuilder(); // (2 * width * height + 2)
            for (let y = 0, height = this.height; y < height; ++y) {
                const bytesY = this.bytes[y];
                for (let x = 0, width = this.width; x < width; ++x) {
                    switch (bytesY[x]) {
                        case 0:
                            result.append(' 0');
                            break;
                        case 1:
                            result.append(' 1');
                            break;
                        default:
                            result.append('  ');
                            break;
                    }
                }
                result.append('\n');
            }
            return result.toString();
        }
    }

    /*
     * Copyright 2008 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @author satorux@google.com (Satoru Takabayashi) - creator
     * @author dswitkin@google.com (Daniel Switkin) - ported from C++
     */
    class QRCode {
        constructor() {
            this.maskPattern = -1;
        }
        getMode() {
            return this.mode;
        }
        getECLevel() {
            return this.ecLevel;
        }
        getVersion() {
            return this.version;
        }
        getMaskPattern() {
            return this.maskPattern;
        }
        getMatrix() {
            return this.matrix;
        }
        /*@Override*/
        toString() {
            const result = new StringBuilder(); // (200)
            result.append('<<\n');
            result.append(' mode: ');
            result.append(this.mode ? this.mode.toString() : 'null');
            result.append('\n ecLevel: ');
            result.append(this.ecLevel ? this.ecLevel.toString() : 'null');
            result.append('\n version: ');
            result.append(this.version ? this.version.toString() : 'null');
            result.append('\n maskPattern: ');
            result.append(this.maskPattern.toString());
            if (this.matrix) {
                result.append('\n matrix:\n');
                result.append(this.matrix.toString());
            }
            else {
                result.append('\n matrix: null\n');
            }
            result.append('>>\n');
            return result.toString();
        }
        setMode(value) {
            this.mode = value;
        }
        setECLevel(value) {
            this.ecLevel = value;
        }
        setVersion(version) {
            this.version = version;
        }
        setMaskPattern(value /*int*/) {
            this.maskPattern = value;
        }
        setMatrix(value) {
            this.matrix = value;
        }
        // Check if "mask_pattern" is valid.
        static isValidMaskPattern(maskPattern /*int*/) {
            return maskPattern >= 0 && maskPattern < QRCode.NUM_MASK_PATTERNS;
        }
    }
    QRCode.NUM_MASK_PATTERNS = 8;

    /**
     * Custom Error class of type Exception.
     */
    class WriterException extends Exception {
    }

    /*
     * Copyright 2008 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @author satorux@google.com (Satoru Takabayashi) - creator
     * @author dswitkin@google.com (Daniel Switkin) - ported from C++
     */
    class MatrixUtil {
        constructor() {
            // do nothing
        }
        // Set all cells to -1 (TYPESCRIPTPORT: 255).  -1 (TYPESCRIPTPORT: 255) means that the cell is empty (not set yet).
        //
        // JAVAPORT: We shouldn't need to do this at all. The code should be rewritten to begin encoding
        // with the ByteMatrix initialized all to zero.
        static clearMatrix(matrix) {
            // TYPESCRIPTPORT: we use UintArray se changed here from -1 to 255
            matrix.clear(/*(byte) */ /*-1*/ 255);
        }
        // Build 2D matrix of QR Code from "dataBits" with "ecLevel", "version" and "getMaskPattern". On
        // success, store the result in "matrix" and return true.
        static buildMatrix(dataBits, ecLevel, version, maskPattern /*int*/, matrix) {
            MatrixUtil.clearMatrix(matrix);
            MatrixUtil.embedBasicPatterns(version, matrix);
            // Type information appear with any version.
            MatrixUtil.embedTypeInfo(ecLevel, maskPattern, matrix);
            // Version info appear if version >= 7.
            MatrixUtil.maybeEmbedVersionInfo(version, matrix);
            // Data should be embedded at end.
            MatrixUtil.embedDataBits(dataBits, maskPattern, matrix);
        }
        // Embed basic patterns. On success, modify the matrix and return true.
        // The basic patterns are:
        // - Position detection patterns
        // - Timing patterns
        // - Dark dot at the left bottom corner
        // - Position adjustment patterns, if need be
        static embedBasicPatterns(version, matrix) {
            // Let's get started with embedding big squares at corners.
            MatrixUtil.embedPositionDetectionPatternsAndSeparators(matrix);
            // Then, embed the dark dot at the left bottom corner.
            MatrixUtil.embedDarkDotAtLeftBottomCorner(matrix);
            // Position adjustment patterns appear if version >= 2.
            MatrixUtil.maybeEmbedPositionAdjustmentPatterns(version, matrix);
            // Timing patterns should be embedded after position adj. patterns.
            MatrixUtil.embedTimingPatterns(matrix);
        }
        // Embed type information. On success, modify the matrix.
        static embedTypeInfo(ecLevel, maskPattern /*int*/, matrix) {
            const typeInfoBits = new BitArray();
            MatrixUtil.makeTypeInfoBits(ecLevel, maskPattern, typeInfoBits);
            for (let i = 0, size = typeInfoBits.getSize(); i < size; ++i) {
                // Place bits in LSB to MSB order.  LSB (least significant bit) is the last value in
                // "typeInfoBits".
                const bit = typeInfoBits.get(typeInfoBits.getSize() - 1 - i);
                // Type info bits at the left top corner. See 8.9 of JISX0510:2004 (p.46).
                const coordinates = MatrixUtil.TYPE_INFO_COORDINATES[i];
                const x1 = coordinates[0];
                const y1 = coordinates[1];
                matrix.setBoolean(x1, y1, bit);
                if (i < 8) {
                    // Right top corner.
                    const x2 = matrix.getWidth() - i - 1;
                    const y2 = 8;
                    matrix.setBoolean(x2, y2, bit);
                }
                else {
                    // Left bottom corner.
                    const x2 = 8;
                    const y2 = matrix.getHeight() - 7 + (i - 8);
                    matrix.setBoolean(x2, y2, bit);
                }
            }
        }
        // Embed version information if need be. On success, modify the matrix and return true.
        // See 8.10 of JISX0510:2004 (p.47) for how to embed version information.
        static maybeEmbedVersionInfo(version, matrix) {
            if (version.getVersionNumber() < 7) { // Version info is necessary if version >= 7.
                return; // Don't need version info.
            }
            const versionInfoBits = new BitArray();
            MatrixUtil.makeVersionInfoBits(version, versionInfoBits);
            let bitIndex = 6 * 3 - 1; // It will decrease from 17 to 0.
            for (let i = 0; i < 6; ++i) {
                for (let j = 0; j < 3; ++j) {
                    // Place bits in LSB (least significant bit) to MSB order.
                    const bit = versionInfoBits.get(bitIndex);
                    bitIndex--;
                    // Left bottom corner.
                    matrix.setBoolean(i, matrix.getHeight() - 11 + j, bit);
                    // Right bottom corner.
                    matrix.setBoolean(matrix.getHeight() - 11 + j, i, bit);
                }
            }
        }
        // Embed "dataBits" using "getMaskPattern". On success, modify the matrix and return true.
        // For debugging purposes, it skips masking process if "getMaskPattern" is -1(TYPESCRIPTPORT: 255).
        // See 8.7 of JISX0510:2004 (p.38) for how to embed data bits.
        static embedDataBits(dataBits, maskPattern /*int*/, matrix) {
            let bitIndex = 0;
            let direction = -1;
            // Start from the right bottom cell.
            let x = matrix.getWidth() - 1;
            let y = matrix.getHeight() - 1;
            while (x > 0) {
                // Skip the vertical timing pattern.
                if (x === 6) {
                    x -= 1;
                }
                while (y >= 0 && y < matrix.getHeight()) {
                    for (let i = 0; i < 2; ++i) {
                        const xx = x - i;
                        // Skip the cell if it's not empty.
                        if (!MatrixUtil.isEmpty(matrix.get(xx, y))) {
                            continue;
                        }
                        let bit;
                        if (bitIndex < dataBits.getSize()) {
                            bit = dataBits.get(bitIndex);
                            ++bitIndex;
                        }
                        else {
                            // Padding bit. If there is no bit left, we'll fill the left cells with 0, as described
                            // in 8.4.9 of JISX0510:2004 (p. 24).
                            bit = false;
                        }
                        // Skip masking if mask_pattern is -1 (TYPESCRIPTPORT: 255).
                        if (maskPattern !== 255 && MaskUtil.getDataMaskBit(maskPattern, xx, y)) {
                            bit = !bit;
                        }
                        matrix.setBoolean(xx, y, bit);
                    }
                    y += direction;
                }
                direction = -direction; // Reverse the direction.
                y += direction;
                x -= 2; // Move to the left.
            }
            // All bits should be consumed.
            if (bitIndex !== dataBits.getSize()) {
                throw new WriterException('Not all bits consumed: ' + bitIndex + '/' + dataBits.getSize());
            }
        }
        // Return the position of the most significant bit set (one: to) in the "value". The most
        // significant bit is position 32. If there is no bit set, return 0. Examples:
        // - findMSBSet(0) => 0
        // - findMSBSet(1) => 1
        // - findMSBSet(255) => 8
        static findMSBSet(value /*int*/) {
            return 32 - Integer.numberOfLeadingZeros(value);
        }
        // Calculate BCH (Bose-Chaudhuri-Hocquenghem) code for "value" using polynomial "poly". The BCH
        // code is used for encoding type information and version information.
        // Example: Calculation of version information of 7.
        // f(x) is created from 7.
        //   - 7 = 000111 in 6 bits
        //   - f(x) = x^2 + x^1 + x^0
        // g(x) is given by the standard (p. 67)
        //   - g(x) = x^12 + x^11 + x^10 + x^9 + x^8 + x^5 + x^2 + 1
        // Multiply f(x) by x^(18 - 6)
        //   - f'(x) = f(x) * x^(18 - 6)
        //   - f'(x) = x^14 + x^13 + x^12
        // Calculate the remainder of f'(x) / g(x)
        //         x^2
        //         __________________________________________________
        //   g(x) )x^14 + x^13 + x^12
        //         x^14 + x^13 + x^12 + x^11 + x^10 + x^7 + x^4 + x^2
        //         --------------------------------------------------
        //                              x^11 + x^10 + x^7 + x^4 + x^2
        //
        // The remainder is x^11 + x^10 + x^7 + x^4 + x^2
        // Encode it in binary: 110010010100
        // The return value is 0xc94 (1100 1001 0100)
        //
        // Since all coefficients in the polynomials are 1 or 0, we can do the calculation by bit
        // operations. We don't care if coefficients are positive or negative.
        static calculateBCHCode(value /*int*/, poly /*int*/) {
            if (poly === 0) {
                throw new IllegalArgumentException('0 polynomial');
            }
            // If poly is "1 1111 0010 0101" (version info poly), msbSetInPoly is 13. We'll subtract 1
            // from 13 to make it 12.
            const msbSetInPoly = MatrixUtil.findMSBSet(poly);
            value <<= msbSetInPoly - 1;
            // Do the division business using exclusive-or operations.
            while (MatrixUtil.findMSBSet(value) >= msbSetInPoly) {
                value ^= poly << (MatrixUtil.findMSBSet(value) - msbSetInPoly);
            }
            // Now the "value" is the remainder (i.e. the BCH code)
            return value;
        }
        // Make bit vector of type information. On success, store the result in "bits" and return true.
        // Encode error correction level and mask pattern. See 8.9 of
        // JISX0510:2004 (p.45) for details.
        static makeTypeInfoBits(ecLevel, maskPattern /*int*/, bits) {
            if (!QRCode.isValidMaskPattern(maskPattern)) {
                throw new WriterException('Invalid mask pattern');
            }
            const typeInfo = (ecLevel.getBits() << 3) | maskPattern;
            bits.appendBits(typeInfo, 5);
            const bchCode = MatrixUtil.calculateBCHCode(typeInfo, MatrixUtil.TYPE_INFO_POLY);
            bits.appendBits(bchCode, 10);
            const maskBits = new BitArray();
            maskBits.appendBits(MatrixUtil.TYPE_INFO_MASK_PATTERN, 15);
            bits.xor(maskBits);
            if (bits.getSize() !== 15) { // Just in case.
                throw new WriterException('should not happen but we got: ' + bits.getSize());
            }
        }
        // Make bit vector of version information. On success, store the result in "bits" and return true.
        // See 8.10 of JISX0510:2004 (p.45) for details.
        static makeVersionInfoBits(version, bits) {
            bits.appendBits(version.getVersionNumber(), 6);
            const bchCode = MatrixUtil.calculateBCHCode(version.getVersionNumber(), MatrixUtil.VERSION_INFO_POLY);
            bits.appendBits(bchCode, 12);
            if (bits.getSize() !== 18) { // Just in case.
                throw new WriterException('should not happen but we got: ' + bits.getSize());
            }
        }
        // Check if "value" is empty.
        static isEmpty(value /*int*/) {
            return value === 255; // -1
        }
        static embedTimingPatterns(matrix) {
            // -8 is for skipping position detection patterns (7: size), and two horizontal/vertical
            // separation patterns (1: size). Thus, 8 = 7 + 1.
            for (let i = 8; i < matrix.getWidth() - 8; ++i) {
                const bit = (i + 1) % 2;
                // Horizontal line.
                if (MatrixUtil.isEmpty(matrix.get(i, 6))) {
                    matrix.setNumber(i, 6, bit);
                }
                // Vertical line.
                if (MatrixUtil.isEmpty(matrix.get(6, i))) {
                    matrix.setNumber(6, i, bit);
                }
            }
        }
        // Embed the lonely dark dot at left bottom corner. JISX0510:2004 (p.46)
        static embedDarkDotAtLeftBottomCorner(matrix) {
            if (matrix.get(8, matrix.getHeight() - 8) === 0) {
                throw new WriterException();
            }
            matrix.setNumber(8, matrix.getHeight() - 8, 1);
        }
        static embedHorizontalSeparationPattern(xStart /*int*/, yStart /*int*/, matrix) {
            for (let x = 0; x < 8; ++x) {
                if (!MatrixUtil.isEmpty(matrix.get(xStart + x, yStart))) {
                    throw new WriterException();
                }
                matrix.setNumber(xStart + x, yStart, 0);
            }
        }
        static embedVerticalSeparationPattern(xStart /*int*/, yStart /*int*/, matrix) {
            for (let y = 0; y < 7; ++y) {
                if (!MatrixUtil.isEmpty(matrix.get(xStart, yStart + y))) {
                    throw new WriterException();
                }
                matrix.setNumber(xStart, yStart + y, 0);
            }
        }
        static embedPositionAdjustmentPattern(xStart /*int*/, yStart /*int*/, matrix) {
            for (let y = 0; y < 5; ++y) {
                const patternY = MatrixUtil.POSITION_ADJUSTMENT_PATTERN[y];
                for (let x = 0; x < 5; ++x) {
                    matrix.setNumber(xStart + x, yStart + y, patternY[x]);
                }
            }
        }
        static embedPositionDetectionPattern(xStart /*int*/, yStart /*int*/, matrix) {
            for (let y = 0; y < 7; ++y) {
                const patternY = MatrixUtil.POSITION_DETECTION_PATTERN[y];
                for (let x = 0; x < 7; ++x) {
                    matrix.setNumber(xStart + x, yStart + y, patternY[x]);
                }
            }
        }
        // Embed position detection patterns and surrounding vertical/horizontal separators.
        static embedPositionDetectionPatternsAndSeparators(matrix) {
            // Embed three big squares at corners.
            const pdpWidth = MatrixUtil.POSITION_DETECTION_PATTERN[0].length;
            // Left top corner.
            MatrixUtil.embedPositionDetectionPattern(0, 0, matrix);
            // Right top corner.
            MatrixUtil.embedPositionDetectionPattern(matrix.getWidth() - pdpWidth, 0, matrix);
            // Left bottom corner.
            MatrixUtil.embedPositionDetectionPattern(0, matrix.getWidth() - pdpWidth, matrix);
            // Embed horizontal separation patterns around the squares.
            const hspWidth = 8;
            // Left top corner.
            MatrixUtil.embedHorizontalSeparationPattern(0, hspWidth - 1, matrix);
            // Right top corner.
            MatrixUtil.embedHorizontalSeparationPattern(matrix.getWidth() - hspWidth, hspWidth - 1, matrix);
            // Left bottom corner.
            MatrixUtil.embedHorizontalSeparationPattern(0, matrix.getWidth() - hspWidth, matrix);
            // Embed vertical separation patterns around the squares.
            const vspSize = 7;
            // Left top corner.
            MatrixUtil.embedVerticalSeparationPattern(vspSize, 0, matrix);
            // Right top corner.
            MatrixUtil.embedVerticalSeparationPattern(matrix.getHeight() - vspSize - 1, 0, matrix);
            // Left bottom corner.
            MatrixUtil.embedVerticalSeparationPattern(vspSize, matrix.getHeight() - vspSize, matrix);
        }
        // Embed position adjustment patterns if need be.
        static maybeEmbedPositionAdjustmentPatterns(version, matrix) {
            if (version.getVersionNumber() < 2) { // The patterns appear if version >= 2
                return;
            }
            const index = version.getVersionNumber() - 1;
            const coordinates = MatrixUtil.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[index];
            for (let i = 0, length = coordinates.length; i !== length; i++) {
                const y = coordinates[i];
                if (y >= 0) {
                    for (let j = 0; j !== length; j++) {
                        const x = coordinates[j];
                        if (x >= 0 && MatrixUtil.isEmpty(matrix.get(x, y))) {
                            // If the cell is unset, we embed the position adjustment pattern here.
                            // -2 is necessary since the x/y coordinates point to the center of the pattern, not the
                            // left top corner.
                            MatrixUtil.embedPositionAdjustmentPattern(x - 2, y - 2, matrix);
                        }
                    }
                }
            }
        }
    }
    MatrixUtil.POSITION_DETECTION_PATTERN = Array.from([
        Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
        Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
        Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
        Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
        Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
        Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
        Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
    ]);
    MatrixUtil.POSITION_ADJUSTMENT_PATTERN = Array.from([
        Int32Array.from([1, 1, 1, 1, 1]),
        Int32Array.from([1, 0, 0, 0, 1]),
        Int32Array.from([1, 0, 1, 0, 1]),
        Int32Array.from([1, 0, 0, 0, 1]),
        Int32Array.from([1, 1, 1, 1, 1]),
    ]);
    // From Appendix E. Table 1, JIS0510X:2004 (71: p). The table was double-checked by komatsu.
    MatrixUtil.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([
        Int32Array.from([-1, -1, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 18, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 22, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 26, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 30, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 34, -1, -1, -1, -1, -1]),
        Int32Array.from([6, 22, 38, -1, -1, -1, -1]),
        Int32Array.from([6, 24, 42, -1, -1, -1, -1]),
        Int32Array.from([6, 26, 46, -1, -1, -1, -1]),
        Int32Array.from([6, 28, 50, -1, -1, -1, -1]),
        Int32Array.from([6, 30, 54, -1, -1, -1, -1]),
        Int32Array.from([6, 32, 58, -1, -1, -1, -1]),
        Int32Array.from([6, 34, 62, -1, -1, -1, -1]),
        Int32Array.from([6, 26, 46, 66, -1, -1, -1]),
        Int32Array.from([6, 26, 48, 70, -1, -1, -1]),
        Int32Array.from([6, 26, 50, 74, -1, -1, -1]),
        Int32Array.from([6, 30, 54, 78, -1, -1, -1]),
        Int32Array.from([6, 30, 56, 82, -1, -1, -1]),
        Int32Array.from([6, 30, 58, 86, -1, -1, -1]),
        Int32Array.from([6, 34, 62, 90, -1, -1, -1]),
        Int32Array.from([6, 28, 50, 72, 94, -1, -1]),
        Int32Array.from([6, 26, 50, 74, 98, -1, -1]),
        Int32Array.from([6, 30, 54, 78, 102, -1, -1]),
        Int32Array.from([6, 28, 54, 80, 106, -1, -1]),
        Int32Array.from([6, 32, 58, 84, 110, -1, -1]),
        Int32Array.from([6, 30, 58, 86, 114, -1, -1]),
        Int32Array.from([6, 34, 62, 90, 118, -1, -1]),
        Int32Array.from([6, 26, 50, 74, 98, 122, -1]),
        Int32Array.from([6, 30, 54, 78, 102, 126, -1]),
        Int32Array.from([6, 26, 52, 78, 104, 130, -1]),
        Int32Array.from([6, 30, 56, 82, 108, 134, -1]),
        Int32Array.from([6, 34, 60, 86, 112, 138, -1]),
        Int32Array.from([6, 30, 58, 86, 114, 142, -1]),
        Int32Array.from([6, 34, 62, 90, 118, 146, -1]),
        Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
        Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
        Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
        Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
        Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
        Int32Array.from([6, 30, 58, 86, 114, 142, 170]),
    ]);
    // Type info cells at the left top corner.
    MatrixUtil.TYPE_INFO_COORDINATES = Array.from([
        Int32Array.from([8, 0]),
        Int32Array.from([8, 1]),
        Int32Array.from([8, 2]),
        Int32Array.from([8, 3]),
        Int32Array.from([8, 4]),
        Int32Array.from([8, 5]),
        Int32Array.from([8, 7]),
        Int32Array.from([8, 8]),
        Int32Array.from([7, 8]),
        Int32Array.from([5, 8]),
        Int32Array.from([4, 8]),
        Int32Array.from([3, 8]),
        Int32Array.from([2, 8]),
        Int32Array.from([1, 8]),
        Int32Array.from([0, 8]),
    ]);
    // From Appendix D in JISX0510:2004 (p. 67)
    MatrixUtil.VERSION_INFO_POLY = 0x1f25; // 1 1111 0010 0101
    // From Appendix C in JISX0510:2004 (p.65).
    MatrixUtil.TYPE_INFO_POLY = 0x537;
    MatrixUtil.TYPE_INFO_MASK_PATTERN = 0x5412;

    /*
     * Copyright 2008 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /*namespace com.google.zxing.qrcode.encoder {*/
    class BlockPair {
        constructor(dataBytes, errorCorrectionBytes) {
            this.dataBytes = dataBytes;
            this.errorCorrectionBytes = errorCorrectionBytes;
        }
        getDataBytes() {
            return this.dataBytes;
        }
        getErrorCorrectionBytes() {
            return this.errorCorrectionBytes;
        }
    }

    /*
     * Copyright 2008 ZXing authors
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /*import java.io.UnsupportedEncodingException;*/
    /*import java.util.ArrayList;*/
    /*import java.util.Collection;*/
    /*import java.util.Map;*/
    /**
     * @author satorux@google.com (Satoru Takabayashi) - creator
     * @author dswitkin@google.com (Daniel Switkin) - ported from C++
     */
    class Encoder {
        // TYPESCRIPTPORT: changed to UTF8, the default for js
        constructor() { }
        // The mask penalty calculation is complicated.  See Table 21 of JISX0510:2004 (p.45) for details.
        // Basically it applies four rules and summate all penalties.
        static calculateMaskPenalty(matrix) {
            return MaskUtil.applyMaskPenaltyRule1(matrix)
                + MaskUtil.applyMaskPenaltyRule2(matrix)
                + MaskUtil.applyMaskPenaltyRule3(matrix)
                + MaskUtil.applyMaskPenaltyRule4(matrix);
        }
        /**
         * @param content text to encode
         * @param ecLevel error correction level to use
         * @return {@link QRCode} representing the encoded QR code
         * @throws WriterException if encoding can't succeed, because of for example invalid content
         *   or configuration
         */
        // public static encode(content: string, ecLevel: ErrorCorrectionLevel): QRCode /*throws WriterException*/ {
        //   return encode(content, ecLevel, null)
        // }
        static encode(content, ecLevel, hints = null) {
            // Determine what character encoding has been specified by the caller, if any
            let encoding = Encoder.DEFAULT_BYTE_MODE_ENCODING;
            const hasEncodingHint = hints !== null && undefined !== hints.get(EncodeHintType$1.CHARACTER_SET);
            if (hasEncodingHint) {
                encoding = hints.get(EncodeHintType$1.CHARACTER_SET).toString();
            }
            // Pick an encoding mode appropriate for the content. Note that this will not attempt to use
            // multiple modes / segments even if that were more efficient. Twould be nice.
            const mode = this.chooseMode(content, encoding);
            // This will store the header information, like mode and
            // length, as well as "header" segments like an ECI segment.
            const headerBits = new BitArray();
            // Append ECI segment if applicable
            if (mode === Mode$1.BYTE && (hasEncodingHint || Encoder.DEFAULT_BYTE_MODE_ENCODING !== encoding)) {
                const eci = CharacterSetECI.getCharacterSetECIByName(encoding);
                if (eci !== undefined) {
                    this.appendECI(eci, headerBits);
                }
            }
            // (With ECI in place,) Write the mode marker
            this.appendModeInfo(mode, headerBits);
            // Collect data within the main segment, separately, to count its size if needed. Don't add it to
            // main payload yet.
            const dataBits = new BitArray();
            this.appendBytes(content, mode, dataBits, encoding);
            let version;
            if (hints !== null && undefined !== hints.get(EncodeHintType$1.QR_VERSION)) {
                const versionNumber = Number.parseInt(hints.get(EncodeHintType$1.QR_VERSION).toString(), 10);
                version = Version$1.getVersionForNumber(versionNumber);
                const bitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, version);
                if (!this.willFit(bitsNeeded, version, ecLevel)) {
                    throw new WriterException('Data too big for requested version');
                }
            }
            else {
                version = this.recommendVersion(ecLevel, mode, headerBits, dataBits);
            }
            const headerAndDataBits = new BitArray();
            headerAndDataBits.appendBitArray(headerBits);
            // Find "length" of main segment and write it
            const numLetters = mode === Mode$1.BYTE ? dataBits.getSizeInBytes() : content.length;
            this.appendLengthInfo(numLetters, version, mode, headerAndDataBits);
            // Put data together into the overall payload
            headerAndDataBits.appendBitArray(dataBits);
            const ecBlocks = version.getECBlocksForLevel(ecLevel);
            const numDataBytes = version.getTotalCodewords() - ecBlocks.getTotalECCodewords();
            // Terminate the bits properly.
            this.terminateBits(numDataBytes, headerAndDataBits);
            // Interleave data bits with error correction code.
            const finalBits = this.interleaveWithECBytes(headerAndDataBits, version.getTotalCodewords(), numDataBytes, ecBlocks.getNumBlocks());
            const qrCode = new QRCode();
            qrCode.setECLevel(ecLevel);
            qrCode.setMode(mode);
            qrCode.setVersion(version);
            //  Choose the mask pattern and set to "qrCode".
            const dimension = version.getDimensionForVersion();
            const matrix = new ByteMatrix(dimension, dimension);
            const maskPattern = this.chooseMaskPattern(finalBits, ecLevel, version, matrix);
            qrCode.setMaskPattern(maskPattern);
            // Build the matrix and set it to "qrCode".
            MatrixUtil.buildMatrix(finalBits, ecLevel, version, maskPattern, matrix);
            qrCode.setMatrix(matrix);
            return qrCode;
        }
        /**
         * Decides the smallest version of QR code that will contain all of the provided data.
         *
         * @throws WriterException if the data cannot fit in any version
         */
        static recommendVersion(ecLevel, mode, headerBits, dataBits) {
            // Hard part: need to know version to know how many bits length takes. But need to know how many
            // bits it takes to know version. First we take a guess at version by assuming version will be
            // the minimum, 1:
            const provisionalBitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, Version$1.getVersionForNumber(1));
            const provisionalVersion = this.chooseVersion(provisionalBitsNeeded, ecLevel);
            // Use that guess to calculate the right version. I am still not sure this works in 100% of cases.
            const bitsNeeded = this.calculateBitsNeeded(mode, headerBits, dataBits, provisionalVersion);
            return this.chooseVersion(bitsNeeded, ecLevel);
        }
        static calculateBitsNeeded(mode, headerBits, dataBits, version) {
            return headerBits.getSize() + mode.getCharacterCountBits(version) + dataBits.getSize();
        }
        /**
         * @return the code point of the table used in alphanumeric mode or
         *  -1 if there is no corresponding code in the table.
         */
        static getAlphanumericCode(code /*int*/) {
            if (code < Encoder.ALPHANUMERIC_TABLE.length) {
                return Encoder.ALPHANUMERIC_TABLE[code];
            }
            return -1;
        }
        // public static chooseMode(content: string): Mode {
        //   return chooseMode(content, null);
        // }
        /**
         * Choose the best mode by examining the content. Note that 'encoding' is used as a hint;
         * if it is Shift_JIS, and the input is only double-byte Kanji, then we return {@link Mode#KANJI}.
         */
        static chooseMode(content, encoding = null) {
            if (CharacterSetECI.SJIS.getName() === encoding && this.isOnlyDoubleByteKanji(content)) {
                // Choose Kanji mode if all input are double-byte characters
                return Mode$1.KANJI;
            }
            let hasNumeric = false;
            let hasAlphanumeric = false;
            for (let i = 0, length = content.length; i < length; ++i) {
                const c = content.charAt(i);
                if (Encoder.isDigit(c)) {
                    hasNumeric = true;
                }
                else if (this.getAlphanumericCode(c.charCodeAt(0)) !== -1) {
                    hasAlphanumeric = true;
                }
                else {
                    return Mode$1.BYTE;
                }
            }
            if (hasAlphanumeric) {
                return Mode$1.ALPHANUMERIC;
            }
            if (hasNumeric) {
                return Mode$1.NUMERIC;
            }
            return Mode$1.BYTE;
        }
        static isOnlyDoubleByteKanji(content) {
            let bytes;
            try {
                bytes = StringEncoding.encode(content, CharacterSetECI.SJIS); // content.getBytes("Shift_JIS"))
            }
            catch (ignored /*: UnsupportedEncodingException*/) {
                return false;
            }
            const length = bytes.length;
            if (length % 2 !== 0) {
                return false;
            }
            for (let i = 0; i < length; i += 2) {
                const byte1 = bytes[i] & 0xFF;
                if ((byte1 < 0x81 || byte1 > 0x9F) && (byte1 < 0xE0 || byte1 > 0xEB)) {
                    return false;
                }
            }
            return true;
        }
        static chooseMaskPattern(bits, ecLevel, version, matrix) {
            let minPenalty = Number.MAX_SAFE_INTEGER; // Lower penalty is better.
            let bestMaskPattern = -1;
            // We try all mask patterns to choose the best one.
            for (let maskPattern = 0; maskPattern < QRCode.NUM_MASK_PATTERNS; maskPattern++) {
                MatrixUtil.buildMatrix(bits, ecLevel, version, maskPattern, matrix);
                let penalty = this.calculateMaskPenalty(matrix);
                if (penalty < minPenalty) {
                    minPenalty = penalty;
                    bestMaskPattern = maskPattern;
                }
            }
            return bestMaskPattern;
        }
        static chooseVersion(numInputBits /*int*/, ecLevel) {
            for (let versionNum = 1; versionNum <= 40; versionNum++) {
                const version = Version$1.getVersionForNumber(versionNum);
                if (Encoder.willFit(numInputBits, version, ecLevel)) {
                    return version;
                }
            }
            throw new WriterException('Data too big');
        }
        /**
         * @return true if the number of input bits will fit in a code with the specified version and
         * error correction level.
         */
        static willFit(numInputBits /*int*/, version, ecLevel) {
            // In the following comments, we use numbers of Version 7-H.
            // numBytes = 196
            const numBytes = version.getTotalCodewords();
            // getNumECBytes = 130
            const ecBlocks = version.getECBlocksForLevel(ecLevel);
            const numEcBytes = ecBlocks.getTotalECCodewords();
            // getNumDataBytes = 196 - 130 = 66
            const numDataBytes = numBytes - numEcBytes;
            const totalInputBytes = (numInputBits + 7) / 8;
            return numDataBytes >= totalInputBytes;
        }
        /**
         * Terminate bits as described in 8.4.8 and 8.4.9 of JISX0510:2004 (p.24).
         */
        static terminateBits(numDataBytes /*int*/, bits) {
            const capacity = numDataBytes * 8;
            if (bits.getSize() > capacity) {
                throw new WriterException('data bits cannot fit in the QR Code' + bits.getSize() + ' > ' +
                    capacity);
            }
            for (let i = 0; i < 4 && bits.getSize() < capacity; ++i) {
                bits.appendBit(false);
            }
            // Append termination bits. See 8.4.8 of JISX0510:2004 (p.24) for details.
            // If the last byte isn't 8-bit aligned, we'll add padding bits.
            const numBitsInLastByte = bits.getSize() & 0x07;
            if (numBitsInLastByte > 0) {
                for (let i = numBitsInLastByte; i < 8; i++) {
                    bits.appendBit(false);
                }
            }
            // If we have more space, we'll fill the space with padding patterns defined in 8.4.9 (p.24).
            const numPaddingBytes = numDataBytes - bits.getSizeInBytes();
            for (let i = 0; i < numPaddingBytes; ++i) {
                bits.appendBits((i & 0x01) === 0 ? 0xEC : 0x11, 8);
            }
            if (bits.getSize() !== capacity) {
                throw new WriterException('Bits size does not equal capacity');
            }
        }
        /**
         * Get number of data bytes and number of error correction bytes for block id "blockID". Store
         * the result in "numDataBytesInBlock", and "numECBytesInBlock". See table 12 in 8.5.1 of
         * JISX0510:2004 (p.30)
         */
        static getNumDataBytesAndNumECBytesForBlockID(numTotalBytes /*int*/, numDataBytes /*int*/, numRSBlocks /*int*/, blockID /*int*/, numDataBytesInBlock, numECBytesInBlock) {
            if (blockID >= numRSBlocks) {
                throw new WriterException('Block ID too large');
            }
            // numRsBlocksInGroup2 = 196 % 5 = 1
            const numRsBlocksInGroup2 = numTotalBytes % numRSBlocks;
            // numRsBlocksInGroup1 = 5 - 1 = 4
            const numRsBlocksInGroup1 = numRSBlocks - numRsBlocksInGroup2;
            // numTotalBytesInGroup1 = 196 / 5 = 39
            const numTotalBytesInGroup1 = Math.floor(numTotalBytes / numRSBlocks);
            // numTotalBytesInGroup2 = 39 + 1 = 40
            const numTotalBytesInGroup2 = numTotalBytesInGroup1 + 1;
            // numDataBytesInGroup1 = 66 / 5 = 13
            const numDataBytesInGroup1 = Math.floor(numDataBytes / numRSBlocks);
            // numDataBytesInGroup2 = 13 + 1 = 14
            const numDataBytesInGroup2 = numDataBytesInGroup1 + 1;
            // numEcBytesInGroup1 = 39 - 13 = 26
            const numEcBytesInGroup1 = numTotalBytesInGroup1 - numDataBytesInGroup1;
            // numEcBytesInGroup2 = 40 - 14 = 26
            const numEcBytesInGroup2 = numTotalBytesInGroup2 - numDataBytesInGroup2;
            // Sanity checks.
            // 26 = 26
            if (numEcBytesInGroup1 !== numEcBytesInGroup2) {
                throw new WriterException('EC bytes mismatch');
            }
            // 5 = 4 + 1.
            if (numRSBlocks !== numRsBlocksInGroup1 + numRsBlocksInGroup2) {
                throw new WriterException('RS blocks mismatch');
            }
            // 196 = (13 + 26) * 4 + (14 + 26) * 1
            if (numTotalBytes !==
                ((numDataBytesInGroup1 + numEcBytesInGroup1) *
                    numRsBlocksInGroup1) +
                    ((numDataBytesInGroup2 + numEcBytesInGroup2) *
                        numRsBlocksInGroup2)) {
                throw new WriterException('Total bytes mismatch');
            }
            if (blockID < numRsBlocksInGroup1) {
                numDataBytesInBlock[0] = numDataBytesInGroup1;
                numECBytesInBlock[0] = numEcBytesInGroup1;
            }
            else {
                numDataBytesInBlock[0] = numDataBytesInGroup2;
                numECBytesInBlock[0] = numEcBytesInGroup2;
            }
        }
        /**
         * Interleave "bits" with corresponding error correction bytes. On success, store the result in
         * "result". The interleave rule is complicated. See 8.6 of JISX0510:2004 (p.37) for details.
         */
        static interleaveWithECBytes(bits, numTotalBytes /*int*/, numDataBytes /*int*/, numRSBlocks /*int*/) {
            // "bits" must have "getNumDataBytes" bytes of data.
            if (bits.getSizeInBytes() !== numDataBytes) {
                throw new WriterException('Number of bits and data bytes does not match');
            }
            // Step 1.  Divide data bytes into blocks and generate error correction bytes for them. We'll
            // store the divided data bytes blocks and error correction bytes blocks into "blocks".
            let dataBytesOffset = 0;
            let maxNumDataBytes = 0;
            let maxNumEcBytes = 0;
            // Since, we know the number of reedsolmon blocks, we can initialize the vector with the number.
            const blocks = new Array(); // new Array<BlockPair>(numRSBlocks)
            for (let i = 0; i < numRSBlocks; ++i) {
                const numDataBytesInBlock = new Int32Array(1);
                const numEcBytesInBlock = new Int32Array(1);
                Encoder.getNumDataBytesAndNumECBytesForBlockID(numTotalBytes, numDataBytes, numRSBlocks, i, numDataBytesInBlock, numEcBytesInBlock);
                const size = numDataBytesInBlock[0];
                const dataBytes = new Uint8Array(size);
                bits.toBytes(8 * dataBytesOffset, dataBytes, 0, size);
                const ecBytes = Encoder.generateECBytes(dataBytes, numEcBytesInBlock[0]);
                blocks.push(new BlockPair(dataBytes, ecBytes));
                maxNumDataBytes = Math.max(maxNumDataBytes, size);
                maxNumEcBytes = Math.max(maxNumEcBytes, ecBytes.length);
                dataBytesOffset += numDataBytesInBlock[0];
            }
            if (numDataBytes !== dataBytesOffset) {
                throw new WriterException('Data bytes does not match offset');
            }
            const result = new BitArray();
            // First, place data blocks.
            for (let i = 0; i < maxNumDataBytes; ++i) {
                for (const block of blocks) {
                    const dataBytes = block.getDataBytes();
                    if (i < dataBytes.length) {
                        result.appendBits(dataBytes[i], 8);
                    }
                }
            }
            // Then, place error correction blocks.
            for (let i = 0; i < maxNumEcBytes; ++i) {
                for (const block of blocks) {
                    const ecBytes = block.getErrorCorrectionBytes();
                    if (i < ecBytes.length) {
                        result.appendBits(ecBytes[i], 8);
                    }
                }
            }
            if (numTotalBytes !== result.getSizeInBytes()) { // Should be same.
                throw new WriterException('Interleaving error: ' + numTotalBytes + ' and ' +
                    result.getSizeInBytes() + ' differ.');
            }
            return result;
        }
        static generateECBytes(dataBytes, numEcBytesInBlock /*int*/) {
            const numDataBytes = dataBytes.length;
            const toEncode = new Int32Array(numDataBytes + numEcBytesInBlock); // int[numDataBytes + numEcBytesInBlock]
            for (let i = 0; i < numDataBytes; i++) {
                toEncode[i] = dataBytes[i] & 0xFF;
            }
            new ReedSolomonEncoder(GenericGF.QR_CODE_FIELD_256).encode(toEncode, numEcBytesInBlock);
            const ecBytes = new Uint8Array(numEcBytesInBlock);
            for (let i = 0; i < numEcBytesInBlock; i++) {
                ecBytes[i] = /*(byte) */ toEncode[numDataBytes + i];
            }
            return ecBytes;
        }
        /**
         * Append mode info. On success, store the result in "bits".
         */
        static appendModeInfo(mode, bits) {
            bits.appendBits(mode.getBits(), 4);
        }
        /**
         * Append length info. On success, store the result in "bits".
         */
        static appendLengthInfo(numLetters /*int*/, version, mode, bits) {
            const numBits = mode.getCharacterCountBits(version);
            if (numLetters >= (1 << numBits)) {
                throw new WriterException(numLetters + ' is bigger than ' + ((1 << numBits) - 1));
            }
            bits.appendBits(numLetters, numBits);
        }
        /**
         * Append "bytes" in "mode" mode (encoding) into "bits". On success, store the result in "bits".
         */
        static appendBytes(content, mode, bits, encoding) {
            switch (mode) {
                case Mode$1.NUMERIC:
                    Encoder.appendNumericBytes(content, bits);
                    break;
                case Mode$1.ALPHANUMERIC:
                    Encoder.appendAlphanumericBytes(content, bits);
                    break;
                case Mode$1.BYTE:
                    Encoder.append8BitBytes(content, bits, encoding);
                    break;
                case Mode$1.KANJI:
                    Encoder.appendKanjiBytes(content, bits);
                    break;
                default:
                    throw new WriterException('Invalid mode: ' + mode);
            }
        }
        static getDigit(singleCharacter) {
            return singleCharacter.charCodeAt(0) - 48;
        }
        static isDigit(singleCharacter) {
            const cn = Encoder.getDigit(singleCharacter);
            return cn >= 0 && cn <= 9;
        }
        static appendNumericBytes(content, bits) {
            const length = content.length;
            let i = 0;
            while (i < length) {
                const num1 = Encoder.getDigit(content.charAt(i));
                if (i + 2 < length) {
                    // Encode three numeric letters in ten bits.
                    const num2 = Encoder.getDigit(content.charAt(i + 1));
                    const num3 = Encoder.getDigit(content.charAt(i + 2));
                    bits.appendBits(num1 * 100 + num2 * 10 + num3, 10);
                    i += 3;
                }
                else if (i + 1 < length) {
                    // Encode two numeric letters in seven bits.
                    const num2 = Encoder.getDigit(content.charAt(i + 1));
                    bits.appendBits(num1 * 10 + num2, 7);
                    i += 2;
                }
                else {
                    // Encode one numeric letter in four bits.
                    bits.appendBits(num1, 4);
                    i++;
                }
            }
        }
        static appendAlphanumericBytes(content, bits) {
            const length = content.length;
            let i = 0;
            while (i < length) {
                const code1 = Encoder.getAlphanumericCode(content.charCodeAt(i));
                if (code1 === -1) {
                    throw new WriterException();
                }
                if (i + 1 < length) {
                    const code2 = Encoder.getAlphanumericCode(content.charCodeAt(i + 1));
                    if (code2 === -1) {
                        throw new WriterException();
                    }
                    // Encode two alphanumeric letters in 11 bits.
                    bits.appendBits(code1 * 45 + code2, 11);
                    i += 2;
                }
                else {
                    // Encode one alphanumeric letter in six bits.
                    bits.appendBits(code1, 6);
                    i++;
                }
            }
        }
        static append8BitBytes(content, bits, encoding) {
            let bytes;
            try {
                bytes = StringEncoding.encode(content, encoding);
            }
            catch (uee /*: UnsupportedEncodingException*/) {
                throw new WriterException(uee);
            }
            for (let i = 0, length = bytes.length; i !== length; i++) {
                const b = bytes[i];
                bits.appendBits(b, 8);
            }
        }
        /**
         * @throws WriterException
         */
        static appendKanjiBytes(content, bits) {
            let bytes;
            try {
                bytes = StringEncoding.encode(content, CharacterSetECI.SJIS);
            }
            catch (uee /*: UnsupportedEncodingException*/) {
                throw new WriterException(uee);
            }
            const length = bytes.length;
            for (let i = 0; i < length; i += 2) {
                const byte1 = bytes[i] & 0xFF;
                const byte2 = bytes[i + 1] & 0xFF;
                const code = ((byte1 << 8) & 0xFFFFFFFF) | byte2;
                let subtracted = -1;
                if (code >= 0x8140 && code <= 0x9ffc) {
                    subtracted = code - 0x8140;
                }
                else if (code >= 0xe040 && code <= 0xebbf) {
                    subtracted = code - 0xc140;
                }
                if (subtracted === -1) {
                    throw new WriterException('Invalid byte sequence');
                }
                const encoded = ((subtracted >> 8) * 0xc0) + (subtracted & 0xff);
                bits.appendBits(encoded, 13);
            }
        }
        static appendECI(eci, bits) {
            bits.appendBits(Mode$1.ECI.getBits(), 4);
            // This is correct for values up to 127, which is all we need now.
            bits.appendBits(eci.getValue(), 8);
        }
    }
    // The original table is defined in the table 5 of JISX0510:2004 (p.19).
    Encoder.ALPHANUMERIC_TABLE = Int32Array.from([
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1,
        -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, -1,
    ]);
    Encoder.DEFAULT_BYTE_MODE_ENCODING = CharacterSetECI.UTF8.getName(); // "ISO-8859-1"

    var decoderCode = "aW1wb3J0IHsKICAgIEJhcmNvZGVGb3JtYXQsCiAgICBCcm93c2VyTXVsdGlGb3JtYXRSZWFkZXIsCiAgICBEZWNvZGVIaW50VHlwZSwKICAgIEhUTUxDYW52YXNFbGVtZW50THVtaW5hbmNlU291cmNlLAogICAgSHlicmlkQmluYXJpemVyLAogICAgQmluYXJ5Qml0bWFwLAogICAgUmVzdWx0Cn0gZnJvbSAiQHp4aW5nL2xpYnJhcnkvZXNtL2luZGV4IjsKCmxldCBjb2RlUmVhZGVyOwoKZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAobXNnKSA9PiB7CiAgICBzd2l0Y2ggKG1zZy50eXBlKSB7CiAgICAgICAgY2FzZSAnaW5pdCc6CiAgICAgICAgICAgIGNvbnN0IGhpbnRzID0gbmV3IE1hcCgpOwogICAgICAgICAgICBoaW50cy5zZXQoRGVjb2RlSGludFR5cGUuUE9TU0lCTEVfRk9STUFUUywgbXNnLmZvcm1hdHMpOwogICAgICAgICAgICBjb2RlUmVhZGVyID0gbmV3IEJyb3dzZXJNdWx0aUZvcm1hdFJlYWRlcihoaW50cyk7CiAgICAgICAgICAgIGJyZWFrOwogICAgfQp9KTsK";

    var CodeReader = /** @class */ (function () {
        function CodeReader(opts) {
            this.initialized = false;
            this.formats = opts.formats || [
                BarcodeFormat$1.EAN_8,
                BarcodeFormat$1.EAN_13,
                BarcodeFormat$1.QR_CODE,
            ];
            this.video = document.createElement("video");
            this.preview = opts.canvas;
            this.scope = document.createElement("canvas");
            this.previewCtx = this.preview.getContext("2d");
            this.scopeCtx = this.scope.getContext("2d");
            this.scopeOptions = opts.scope;
            var decoderBlob = new Blob([atob(decoderCode)], { type: 'application/javascript' });
            this.decodeWorker = new Worker(URL.createObjectURL(decoderBlob));
            switch (opts.scope.style) {
                default:
                case "rect":
                    this.drawFunction = this.drawRect;
                    break;
                case "corner":
                    this.previewCtx.strokeStyle = opts.scope.color;
                    this.previewCtx.lineWidth = opts.scope.lineWidth;
                    this.drawFunction = this.drawCorner;
                    break;
                case "shelf":
                    this.previewCtx.strokeStyle = opts.scope.color;
                    this.previewCtx.lineWidth = opts.scope.lineWidth;
                    this.drawFunction = this.drawShelf;
                    break;
                case "line":
                    this.previewCtx.strokeStyle = opts.scope.color;
                    this.previewCtx.lineWidth = opts.scope.lineWidth;
                    this.drawFunction = this.drawLine;
                    break;
                case "custom":
                    this.drawFunction = opts.scope.drawFunction;
                    break;
                case "none":
                    this.drawFunction = function () { };
                    break;
            }
        }
        CodeReader.prototype.init = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.decodeWorker.sendMessage({
                                type: 'init',
                                formats: this.formats
                            });
                            _a = this.video;
                            return [4 /*yield*/, navigator.mediaDevices.getUserMedia({
                                    video: { facingMode: "environment" }
                                })];
                        case 1:
                            _a.srcObject = _b.sent();
                            return [4 /*yield*/, this.video.play()];
                        case 2:
                            _b.sent();
                            this.calculateSizes();
                            requestAnimationFrame(function () { return _this.render(); });
                            this.resizeListener = function () { return _this.calculateSizes(); };
                            window.addEventListener('resize', this.resizeListener);
                            this.initialized = true;
                            return [2 /*return*/];
                    }
                });
            });
        };
        CodeReader.prototype.destroy = function () {
            window.removeEventListener('resize', this.resizeListener);
            this.initialized = false;
            this.video.pause();
        };
        CodeReader.prototype.calculateSizes = function () {
            this.preview.width = this.video.videoWidth;
            this.preview.height = this.video.videoHeight;
            // Set scope rectangle based on the longest canvas side
            this.scopeRect = { x: 0, y: 0, w: 0, h: 0 };
            if (this.preview.width < this.preview.height) {
                this.scopeRect.h = Math.round(this.preview.height / 2);
                this.scopeRect.w = Math.round(Math.min(this.scopeRect.h / 3 * 4, // 4:3
                this.preview.width - 40 // Maximum width
                ));
            }
            else {
                this.scopeRect.w = Math.round(this.preview.width / 2);
                this.scopeRect.h = Math.round(this.scopeRect.w / 4 * 3); // 3:4
            }
            this.scope.width = this.scopeRect.w;
            this.scope.height = this.scopeRect.h;
            this.scopeRect.x = Math.round(this.preview.width / 2 - this.scopeRect.w / 2);
            this.scopeRect.y = Math.round(this.preview.height / 2 - this.scopeRect.h / 2);
        };
        CodeReader.prototype.render = function () {
            var _this = this;
            var _a = this.scopeRect, x = _a.x, y = _a.y, w = _a.w, h = _a.h;
            this.scopeCtx.drawImage(this.video, x, y, w, h, 0, 0, w, h);
            this.previewCtx.drawImage(this.video, 0, 0);
            this.drawFunction(this.previewCtx);
            if (this.initialized) {
                requestAnimationFrame(function () { return _this.render(); });
            }
        };
        CodeReader.prototype.decode = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // TODO: Implement with worker
                    return [2 /*return*/, null];
                });
            });
        };
        CodeReader.prototype.read = function () {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!this.initialized) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.init()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [4 /*yield*/, this.decode()];
                        case 3:
                            result = _a.sent();
                            return [2 /*return*/, result.getText()];
                    }
                });
            });
        };
        CodeReader.prototype.drawRect = function () {
            if (this.scopeOptions.style != "rect") {
                return;
            }
            var _a = this.scopeRect, x = _a.x, y = _a.y, w = _a.w, h = _a.h;
            this.previewCtx.beginPath();
            this.previewCtx.strokeStyle = this.scopeOptions.color || "#75ff75";
            this.previewCtx.lineWidth = this.scopeOptions.lineWidth || 2;
            this.previewCtx.rect(x, y, w, h);
            this.previewCtx.stroke();
        };
        CodeReader.prototype.drawCorner = function () {
            if (this.scopeOptions.style != "corner") {
                return;
            }
            var _a = this.scopeRect, x = _a.x, y = _a.y, w = _a.w, h = _a.h;
            var length = this.scopeOptions.length || 30;
            var topLeft = {
                x: x,
                y: y
            };
            var topRight = {
                x: x + w,
                y: y
            };
            var bottomLeft = {
                x: x,
                y: y + h
            };
            var bottomRight = {
                x: x + w,
                y: y + h
            };
            this.previewCtx.beginPath();
            this.previewCtx.strokeStyle = this.scopeOptions.color || "#75ff75";
            this.previewCtx.lineWidth = this.scopeOptions.lineWidth || 2;
            this.previewCtx.moveTo(topLeft.x, topLeft.y);
            this.previewCtx.lineTo(topLeft.x + length, topLeft.y);
            this.previewCtx.moveTo(topLeft.x, topLeft.y);
            this.previewCtx.lineTo(topLeft.x, topLeft.y + length);
            this.previewCtx.moveTo(topRight.x, topRight.y);
            this.previewCtx.lineTo(topRight.x - length, topRight.y);
            this.previewCtx.moveTo(topRight.x, topRight.y);
            this.previewCtx.lineTo(topRight.x, topRight.y + length);
            this.previewCtx.moveTo(bottomLeft.x, bottomLeft.y);
            this.previewCtx.lineTo(bottomLeft.x + length, bottomLeft.y);
            this.previewCtx.moveTo(bottomLeft.x, bottomLeft.y);
            this.previewCtx.lineTo(bottomLeft.x, bottomLeft.y - length);
            this.previewCtx.moveTo(bottomRight.x, bottomRight.y);
            this.previewCtx.lineTo(bottomRight.x - length, bottomRight.y);
            this.previewCtx.moveTo(bottomRight.x, bottomRight.y);
            this.previewCtx.lineTo(bottomRight.x, bottomRight.y - length);
            this.previewCtx.stroke();
        };
        CodeReader.prototype.drawShelf = function () {
            if (this.scopeOptions.style != "shelf") {
                return;
            }
            var _a = this.scopeRect, x = _a.x, y = _a.y, w = _a.w, h = _a.h;
            var length = this.scopeOptions.length || 30;
            var bottomLeft = {
                x: x,
                y: y + h
            };
            var bottomRight = {
                x: x + w,
                y: y + h
            };
            this.previewCtx.beginPath();
            this.previewCtx.strokeStyle = this.scopeOptions.color || "#75ff75";
            this.previewCtx.lineWidth = this.scopeOptions.lineWidth || 2;
            this.previewCtx.moveTo(bottomLeft.x, bottomLeft.y - length);
            this.previewCtx.lineTo(bottomLeft.x, bottomLeft.y);
            this.previewCtx.lineTo(bottomRight.x, bottomRight.y);
            this.previewCtx.lineTo(bottomRight.x, bottomRight.y - length);
            this.previewCtx.stroke();
        };
        CodeReader.prototype.drawLine = function () {
            if (this.scopeOptions.style != "line") {
                return;
            }
            var _a = this.scopeRect, x = _a.x, y = _a.y, w = _a.w, h = _a.h;
            this.previewCtx.beginPath();
            this.previewCtx.strokeStyle = this.scopeOptions.color || "#75ff75";
            this.previewCtx.lineWidth = this.scopeOptions.lineWidth || 2;
            this.previewCtx.moveTo(x, y + h / 2);
            this.previewCtx.lineTo(x + w, y + h / 2);
            this.previewCtx.stroke();
        };
        CodeReader.formats = BarcodeFormat$1;
        return CodeReader;
    }());

    return CodeReader;

})));
//# sourceMappingURL=CodeReader.js.map
