import { useState, useRef } from 'react';
import Main from '../Main';
import Avatar from './Avatar';
import PictureWall from './PictureWall';
import Size from './Size';
import Generate from './Generate';
import { Form, Button } from 'antd';
import { SyncOutlined, ExportOutlined } from '@ant-design/icons';

const description = [
	{ val: '根据组合素材拼接成目标图片。' },
	{ val: '* 画布尺寸为最终生成图片的尺寸，值越大则处理速度越慢。' },
	{ val: '* 拼图单元为组合素材的尺寸，值越小则处理速度越慢。' }
];

export default function Puzzle() {
	const [form, setForm] = useState({});
	const [showCanvas, setShowCanvas] = useState(false);
	const canvasRef = useRef(null);

	const [loading, setLoading] = useState(false);

	const onFinish = values => {
		console.log('onFinish: ', values);
		setForm(values);
		setShowCanvas(true);
		setLoading(true);
	};

	const handleExport = () => {
		canvasRef.current.changeVal(form.file.name);
	};

	return (
		<Main className="interest-puzzle" title="Puzzle" description={description}>
			<Form
				name="basic"
				initialValues={{
					size: 3200,
					pixel: 32
				}}
				onFinish={onFinish}
				labelCol={{ span: 2 }}
				wrapperCol={{ span: 21, offset: 1 }}
			>
				<Form.Item
					valuePropName="file"
					getValueFromEvent={e => {
						return e && e.file;
					}}
					label="目标图片"
					name="file"
					rules={[{ required: true, message: '请选择目标图片' }]}
				>
					<Avatar />
				</Form.Item>

				<Form.Item
					valuePropName="fileList"
					getValueFromEvent={e => {
						return e && e.fileList;
					}}
					label="组合素材"
					name="fileList"
					rules={[{ required: true, message: '请选择组合素材' }]}
				>
					<PictureWall />
				</Form.Item>

				<Form.Item
					label="画布尺寸"
					name="size"
					rules={[{ required: true, message: '请选择画布尺寸' }]}
				>
					<Size
						marks={{
							800: '800px',
							1600: '1600px',
							3200: '3200px',
							6400: '6400px'
						}}
						min={800}
						max={6400}
						step={800}
					/>
				</Form.Item>

				<Form.Item
					label="拼图单元"
					name="pixel"
					rules={[{ required: true, message: '请选择拼图单元尺寸' }]}
				>
					<Size
						marks={{
							8: '8px',
							16: '16px',
							32: '32px',
							64: '64px'
						}}
						min={8}
						max={64}
						step={8}
					/>
				</Form.Item>

				<Form.Item wrapperCol={{ span: 21, offset: 3 }}>
					<Button
						loading={loading}
						icon={<SyncOutlined />}
						type="primary"
						htmlType="submit"
					>
						Generate
					</Button>
					{showCanvas && !loading && (
						<Button
							loading={loading}
							onClick={handleExport}
							icon={<ExportOutlined />}
							type="primary"
							style={{ marginLeft: 20 }}
						>
							Export
						</Button>
					)}
				</Form.Item>

				{showCanvas && (
					<Form.Item label="预览" style={{ marginTop: 50 }}>
						<div className="interest-puzzle__canvas-wrapper">
							<Generate
								ref={canvasRef}
								width={form.size}
								height={form.size}
								pixel={form.pixel}
								url={form.file.imageUrl}
								fileList={form.fileList}
								export={handleExport}
								onFinish={() => {
									setLoading(false);
								}}
							/>
						</div>
					</Form.Item>
				)}
			</Form>
		</Main>
	);
}
