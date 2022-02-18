type Task = () => Promise<number>

export default class Parallel {
    private tasks: Task[] = [];

    private taskRunning = 0;

    constructor(private countStream: number) {
        if (countStream < 1) throw Error('')
    }

    public jobs(...tasks: Task[]) {
        this.tasks = tasks;
        const out: number[] = []
        return new Promise((resolve) => {
            this.fillStack(out, resolve)
        })
    }

    private fillStack(out: number[], resolve: (v: any) => void) {
        while (this.tasks.length > 0 && this.taskRunning <= this.countStream) {
            const fn = this.tasks.splice(0, 1)
            this.taskRunning += 1;
            fn[0]()
                .then((v) => {
                    out.push(v);
                    this.taskRunning -= 1;
                    this.fillStack(out, resolve);
                    return v;
                })
        }

        if (this.tasks.length === 0 && this.taskRunning === 0) {
            resolve(out);
        }
    }
}

const runner = new Parallel(2);

export async function log() {
    console.log(
        await runner.jobs(
            () => new Promise((resolve) => {
                setTimeout(resolve, 1000, 1);
            }),
            () => new Promise((resolve) => {
                setTimeout(resolve, 4000, 2);
            }),
            () => new Promise((resolve) => {
                setTimeout(resolve, 2000, 3);
            }),
            () => new Promise((resolve) => {
                setTimeout(resolve, 9000, 4);
            }),
            () => new Promise((resolve) => {
                setTimeout(resolve, 3000, 5);
            })
        )
    );
}

log();