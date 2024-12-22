import { defineConfig } from "vitest/config"
import "dotenv/config"
export default defineConfig({
    test: {
        environmentMatchGlobs: [
            ['src/domain/use-cases/*.test.ts']
        ]
    }

})