// TODO 1: MapIterator interface; gMap function

// TODO 2: FilterIterator interface; gFilter function

// TODO 3: AllIterator interface; gAll function
interface IAllIterator<T, R> {
    (item: T, index: number): R;
}

function Iterate<T, K>(list: T[], mapper: IAllIterator<T, K>): K[] {
    let iteratedList: K[];

    list.forEach(function (el: T, i: number) {
        let iteratedEl: K = mapper(el, i);
        iteratedList.push(iteratedEl);
    });

    return iteratedList;
}
let fnMapper: IAllIterator<string, boolean> = function (names: string, i: number): boolean {
    return true;
};

// TODO 4: SliceIterator interface; gEachSlice function


// TODO 5: ReduceIterator interface; gReduce function

// TODO 6: gPluck function

// TODO 7: interfaces: GroupByIterator & Grouped; gGroupBy function
