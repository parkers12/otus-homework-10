type Task = () => Promise<number>
type Resolve = (arg: any) => void;
export default class Parallel {
  private tasks: Task[] = [];

  private taskRunning = 0;

  constructor(private countStream: number) {
    if (countStream < 1) throw Error('')
  }

  public jobs(...tasks: Task[]) {
    this.tasks = [...tasks];
    const out: number[] = [];
    return new Promise((resolve) => {
      this.fillStack(out, resolve)
    })
  }

  private fillStack(out: number[], resolve: Resolve) {
    while (this.tasks.length > 0 && this.taskRunning <= this.countStream) {
      const fn = this.tasks.splice(0, 1)
        this.taskRunning += 1;
        fn[0]()
          .then((v) => {
            out.push(v);
            this.taskRunning -= 1;
            this.fillStack(out, resolve);
          })
    }

    if (this.tasks.length === 0 && this.taskRunning === 0) {
      resolve(out);
    }
  }
}