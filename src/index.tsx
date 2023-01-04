import { Context, Schema, Session } from 'koishi';
import tenapi from './parsers/tenapi';

export const name = 'video-decoder';

export interface Config {
	api: string;
}

export const Config = Schema.object({
	api: Schema.union(['tenapi', '暂时没有别的接口了'])
		.description('选择一个你喜欢的接口名称，不同接口支持的平台可能不同')
		.default('plapi'),
});

// 每一个选项对应的接口函数
const parsers = {
	tenapi,
};

export async function apply(ctx: Context, config: Config) {
	ctx.command('#视频解析 <url>').action(
		async ({ session }: { session: Session }, url) => {
			const parser = parsers[config.api];

			if (!parser) {
				return (
					<>
						<quote id={session.messageId} />
						插件配置错误喵，请联系bot管理员更换接口喵~
					</>
				);
			}

			const result: string = await parser(ctx, url);

			if (!result.startsWith('err:')) {
				session.send(
					<>
						<quote id={session.messageId} />
						解析成功喵,正在上传喵~
					</>
				);
				return (
					<>
						<video url={result}></video>
					</>
				);
			} else {
				return (
					<>
						<quote id={session.messageId} />
						解析失败喵~,{result.replace('err:', '')}
					</>
				);
			}
		}
	);
}
