import { Context } from 'egg';
export default function fooMiddleware():any {
  return async (_ctx:Context, next:()=>Promise<any>) => {
    console.log('这里是中间件');
    await next();
  };
}
