/**
 * Get / Manage the currently authenticated user
 */

// import AWS from "aws-sdk";
import getHandler from "@/middleware";
import { requireAuthentication } from "@/middleware/auth";
// import { awsCredentials } from "@/env-config";

// const s3 = new AWS.S3({
// 	...awsCredentials
// });
const handler = getHandler();

handler
	.use(requireAuthentication)
	.post(async (req, res) => {
		res.json({
			success: true
		});
	})
	.delete(async (req, res) => {
		// Remove the file.

		res.json({
			success: true
		});
	});

export default handler;
