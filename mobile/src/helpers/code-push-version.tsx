import * as React from 'react';
import { StyleSheet, Text, Alert } from 'react-native';
import codePush, { LocalPackage } from 'react-native-code-push';
import evn from 'react-native-config'
import colors from 'res/colors';

interface Props {}

interface State {
  res?: LocalPackage;
}

export default class CodePushVerion extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      res: undefined,
    };
  }

  public componentDidMount(): void {
    if (__DEV__) return;
    this.onFetchInfoCodePush();
  }

  private onFetchInfoCodePush() {
    codePush
      .getUpdateMetadata()
      .then((res: any) => {
        console.log('code-push-info: ', res);
        this.setState({ res });
        // alert(`codePush-info ${JSON.stringify(res)}`);
      })
      .catch((err) => {
        console.log('code-push-info-err: ', err);
        // alert(`codePush-info-err ${JSON.stringify(err)}`);
      });
  }

  private onShowInfo = (): void => {
    const { res } = this.state;
    if (!res) return;
    Alert.alert(
      'Thông Tin Phiên Bản',
      `App Version: ${res.appVersion} (${res.label})\n` +
        `Deployment Key: ***${res.deploymentKey.slice(0, 3)}***\n`+
        `Type APP: ${evn.TYPE_APP}\n`,
      [{ text: 'OK' }],
      {
        cancelable: true,
      }
    );
  };

  private getTextVersion(res: LocalPackage): string {
    let txt = 'Phiên Bản: ';
    try {
      txt += `${res.appVersion} (${res.label})`;
    } catch (error) {
      console.log('getTextVersion: ', error);
    }
    return txt;
  }

  public render(): React.ReactNode | null {
    const { res } = this.state;
    if (!res) return null;
    return (
      <Text style={styles.txtVersion} onPress={this.onShowInfo}>
        {this.getTextVersion(res)}
      </Text>
    );
  }
}
const styles = StyleSheet.create({
  txtVersion: {
    textAlign: 'right',
    marginRight: 12,
    color: colors.grey700,
    fontSize: 12,
    marginBottom: 2,
  },
});
