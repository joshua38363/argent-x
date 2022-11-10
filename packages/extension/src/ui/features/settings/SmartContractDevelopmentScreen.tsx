import { BarBackButton, NavigationBar } from "@argent/ui"
import { Stack } from "@chakra-ui/react"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

import { routes } from "../../routes"
import { SettingsMenuItem } from "./SettingsMenuItem"

const SmartContractDevelopmentScreen: FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <NavigationBar
        leftButton={<BarBackButton onClick={() => navigate(-1)} />}
        title={"Smart contract development"}
      />

      <Stack direction="column" mx="4">
        <SettingsMenuItem
          to={routes.settingsSmartContractDeclare()}
          title="Declare smart contract"
        />

        <SettingsMenuItem
          to={routes.settingsSmartContractDeploy()}
          title="Deploy smart contract"
        />
      </Stack>
    </>
  )
}

export { SmartContractDevelopmentScreen }
