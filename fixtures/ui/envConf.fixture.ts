import { test as base } from '@playwright/test';

class EnvConfTest {
    getValue(keyPrefix: string) {
        let keyPostFix = "_PROD";
        if (process.env.ENV === "dev") {
            keyPostFix = "_DEV";
        }
        return process.env[`${keyPrefix}${keyPostFix}`];
    }
}

const envConf = base.extend<{ envConf: EnvConfTest }>({
    envConf: async ({ }, use) => {
        const envConf = new EnvConfTest();
        await use(envConf);
    }
})

export { envConf };